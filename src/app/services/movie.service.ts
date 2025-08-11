import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>("http://localhost:8082/api/v1/movie/allMovie");
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(
      'http://localhost:8082/api/v1/movie/addMovie',
      movie
    );
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(
      'http://localhost:8082/api/v1/movie/updateMovie',
      movie
    );
  }

  deleteMovie(id: number) {
    return this.http.delete(
      `http://localhost:8082/api/v1/movie/deleteByMovieId/${id}`,
      {
        responseType: 'text'
      }
    );
  }

}
