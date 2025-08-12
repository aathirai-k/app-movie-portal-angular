import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { UserResponse } from '../model/user-response.model'
import { LoginUser } from '../model/login-user.model';
import { LoginResponse } from '../model/login-response.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: LoginUser): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:8080/api/v1/auth/login', user).pipe(
      tap((response: LoginResponse) => {
      })
    );
  }

  register(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(
      'http://localhost:8080/api/v1/users/register',
      user
    );
  }
}
