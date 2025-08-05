import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  movieForm: FormGroup;
  responseMessage: string = '';
  isSuccessfullyAddedMovie: boolean = false;

  constructor(private fb: FormBuilder, private movieService: MovieService) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      genre: ['', Validators.required],
      releaseYear: ['', [
        Validators.required,
        Validators.pattern(/^\d{4}$/),
        this.releaseYearValidator
      ]],
      posterUrl: ['', Validators.required],
      trailerUrl: ['']
    });
  }

  releaseYearValidator(control: AbstractControl): ValidationErrors | null {
    const enteredYear = Number(control.value);
    const currentYear = new Date().getFullYear();
    if (enteredYear > currentYear) {
      return { futureYear: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      const movie = this.movieForm.value;
      this.movieService.addMovie(movie).subscribe({
        next: (response) => {
          console.log('Movie added successfully', response);
          this.responseMessage = "Movie added successfully";
          this.isSuccessfullyAddedMovie = true;
        },
        error: (error) => {
          console.error('Error adding movie', error);
          this.responseMessage = "Failed to add movie";
          this.isSuccessfullyAddedMovie = false;
        }
      });
    } else {
      alert('Form is invalid');
    }
  }

  setCurrentYearIfEmpty(): void {
    const control = this.movieForm.get('releaseYear');
    if (control && !control.value) {
      const currentYear = new Date().getFullYear();
      control.setValue(currentYear);
    }
  }
}
