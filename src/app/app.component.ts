import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieService } from './services/movie.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-movie-portal-angular';
}
