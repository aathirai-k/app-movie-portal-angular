import { Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel/admin-panel.component';
import { MovieContentComponent } from './admin-panel/movie-content/movie-content.component';
import { AdminDashboardComponent } from './admin-panel/admin-dashboard/admin-dashboard.component';
import { SigninComponent } from './user-panel/signin/signin.component';
import { HomeComponent } from './user-panel/home/home.component';
import { RegisterComponent } from './user-panel/register/register.component';
import { AdminGuard } from './guards/admin.guard';
import { NonAdminGuard } from './guards/non-admin-guard.guard';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminPanelComponent,
    children: [
      {
        path: 'movies',
        component: MovieContentComponent
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      }
    ],
    canActivate: [AdminGuard]
  },
  {
    path: 'login',
    component: SigninComponent,
    canActivate: [NonAdminGuard]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [NonAdminGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NonAdminGuard]
  }
];
