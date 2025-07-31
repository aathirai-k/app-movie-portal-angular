import { Component } from '@angular/core';
import { MovieSidebarComponent } from '../movie-sidebar/movie-sidebar.component';
import { MovieHeaderComponent } from '../movie-header/movie-header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [ MovieSidebarComponent, MovieHeaderComponent, RouterOutlet ],
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent { }
