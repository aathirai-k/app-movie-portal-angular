import { Component } from '@angular/core';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieListViewComponent } from './movie-list-view/movie-list-view.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-content',
  standalone: true,
  imports: [AddMovieComponent, CommonModule, MovieListViewComponent],
  templateUrl: './movie-content.component.html',
  styleUrl: './movie-content.component.css'
})
export class MovieContentComponent {
    activeTab = 'addMovies';

    selectTab(tab: string) {
      this.activeTab = tab;
    }

}
