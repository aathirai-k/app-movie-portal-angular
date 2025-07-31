import { Component } from '@angular/core';
import { MovieSidebarComponent } from '../movie-sidebar/movie-sidebar.component';
import { MovieHeaderComponent } from '../movie-header/movie-header.component';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [ MovieSidebarComponent, MovieHeaderComponent ],
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent { }
