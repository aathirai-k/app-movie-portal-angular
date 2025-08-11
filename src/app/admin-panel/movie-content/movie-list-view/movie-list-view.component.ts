import { Component, OnInit, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../model/movie.model';
import { Modal } from 'bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-movie-list-view',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './movie-list-view.component.html',
  styleUrl: './movie-list-view.component.css'
})
export class MovieListViewComponent implements OnInit, AfterViewInit  {
  @ViewChild('confirmModel') confirmModel!: ElementRef;
  private modalInstance: Modal | null = null;
  movieIdToDelete: number | null = null;
  movies: Movie[] = [];
  page: number = 1;
  filteredMovies: Movie[] = [];
  searchTerm: string = '';
  sortField: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  editMovieForm: FormGroup;
  selectedMovie: any = {};


  constructor(private movieService: MovieService, private fb: FormBuilder) {
    this.editMovieForm = this.fb.group({
      title: [''],
      genre: [''],
      releaseYear: [''],
      description: [''],
      posterUrl: [''],
      trailerUrl: ['']
    });
  }

  ngOnInit() {
    this.getAllMoviesData();
    console.log(this.movies);
  }

  ngAfterViewInit() {
    if (this.confirmModel) {
      this.modalInstance = new Modal(this.confirmModel.nativeElement);
    }
  }

  getAllMoviesData() {
    this.movieService.getAllMovies().subscribe({
      next: (response) => {
        this.movies = response;
        this.filteredMovies = response;
      },
      error: (err) => {
        console.error('Error fetching movies', err);
      }
    });
  }

  filterMovies() {
    if (!this.searchTerm) {
      this.filteredMovies = this.movies;
    } else {
      const lowerSearch = this.searchTerm.toLowerCase();
      this.filteredMovies = this.movies.filter(movie =>
        movie.title.toLowerCase().includes(lowerSearch) ||
        (movie.genre && movie.genre.toLowerCase().includes(lowerSearch)) ||
        (movie.releaseYear && movie.releaseYear.toString().includes(lowerSearch))
      );
    }
  }

  sortBy(field: 'title' | 'releaseYear') {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }

    this.filteredMovies.sort((a, b) => {
      let valA: string | number;
      let valB: string | number;

      switch (field) {
        case 'title':
          valA = a.title;
          valB = b.title;
          break;
        case 'releaseYear':
          valA = a.releaseYear;
          valB = b.releaseYear;
          break;
        default:
          return 0;
      }

      if (typeof valA === 'string') {
        return this.sortDirection === 'asc'
          ? valA.localeCompare(valB as string)
          : (valB as string).localeCompare(valA);
      } else {
        return this.sortDirection === 'asc'
          ? (valA as number) - (valB as number)
          : (valB as number) - (valA as number);
      }
    });
  }

  openEditModal(movie: any) {
    this.selectedMovie = movie;
    this.editMovieForm.patchValue(movie);

    const modal = new bootstrap.Modal(document.getElementById('editMovieModal'));
    modal.show();
  }

  saveChanges() {
    const updatedMovie = { ...this.selectedMovie, ...this.editMovieForm.value };
    this.movieService.updateMovie(updatedMovie).subscribe({
      next: (response) => {
        console.log(response);
        this.filteredMovies = this.filteredMovies.map(movie =>
          movie.id === response.id ? response : movie
        );

      },
      error: (err) => {
        console.error('Error fetching movies', err);
      }
    });
  }

  deleteMovie(id: number) {
    this.movieIdToDelete = id;
    this.modalInstance?.show();
  }

  confirm() {
    if (this.movieIdToDelete !== null) {
      this.movieService.deleteMovie(this.movieIdToDelete).subscribe({
        next: () => {
          this.filteredMovies = this.filteredMovies.filter(movie => movie.id !== this.movieIdToDelete);
          this.movieIdToDelete = null;
          this.modalInstance?.hide();
        },
        error: (err) => {
          console.error('Error deleting movie', err);
          this.modalInstance?.hide();
        }
      });
    }
  }
}
