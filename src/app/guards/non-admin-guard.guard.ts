import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class NonAdminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    const role = this.auth.getUserRole();
    if (role !== 'ROLE_ADMIN') {
      return true;
    }

    this.router.navigate(['/admin']);
    return false;
  }
}
