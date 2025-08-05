import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.model';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>("http://localhost:8082/api/v1/movie/allMovie");
  }

  addMovie(movie: Movie): Observable<Movie> {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX0FETUlOIl0sImlhdCI6MTc1NDM3NTcxNiwiZXhwIjoxNzU0Mzc5MzE2fQ.ugfPYi5KJ-uC_3wVCWWgHZhyzncLI89UYoZmA3mRczg';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  console.log(movie);
    return this.http.post<Movie>(
      'http://localhost:8082/api/v1/movie/addMovie',
      movie,
      { headers }
    );
  }

  updateMovie(movie: Movie): Observable<Movie> {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX0FETUlOIl0sImlhdCI6MTc1NDMxOTUzOCwiZXhwIjoxNzU0MzIzMTM4fQ.lMxWD-7yj2SnbupgToInkjj2SQpUKveBtnNFoEKhjuE';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.put<Movie>(
      'http://localhost:8082/api/v1/movie/updateMovie',
      movie,
      { headers }
    );
  }

  deleteMovie(id: number) {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX0FETUlOIl0sImlhdCI6MTc1NDM3NTcxNiwiZXhwIjoxNzU0Mzc5MzE2fQ.ugfPYi5KJ-uC_3wVCWWgHZhyzncLI89UYoZmA3mRczg';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete(
      `http://localhost:8082/api/v1/movie/deleteByMovieId/${id}`,
      {
        headers,
        responseType: 'text'
      }
    );
  }

}
