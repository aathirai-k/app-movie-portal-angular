import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usernameSubject = new BehaviorSubject<string | null>(localStorage.getItem('username'));
  username$ = this.usernameSubject.asObservable();

  constructor() { }

  setUsername(username: string) {
    localStorage.setItem('username', username);
    this.usernameSubject.next(username);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userRole');
    this.usernameSubject.next(null);
  }

  setUserRole(userRole: string) {
    localStorage.setItem('userRole', userRole);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }
}
