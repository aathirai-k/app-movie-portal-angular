import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userName: string | null = null;

  constructor(@Inject(AuthService) private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.username$.subscribe(name => {
      this.userName = name;
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.authService.logout();
    this.authService.setUserRole('');
    this.userName = '';
  }

}
