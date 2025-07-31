import { Routes } from '@angular/router';
import  {AdminPanelComponent} from './admin-panel/admin-panel/admin-panel.component';
import { MovieContentComponent } from './admin-panel/movie-content/movie-content.component';
import { AdminDashboardComponent } from './admin-panel/admin-dashboard/admin-dashboard.component';


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
    ]
  }
];
