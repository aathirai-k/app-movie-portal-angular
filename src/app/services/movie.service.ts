import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id: number;
  title: string;
  release_year: number;
  genre: string;
  description: string;
  poster_url: string;
  trailer_url: string;
}

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>("http://localhost:8082/api/v1/movie/allMovie");
  }


}
