import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-sidebar.component.html',
  styleUrl: './movie-sidebar.component.css'
})
export class MovieSidebarComponent {
  selectedItem: String = "Dashboard";

  selectItem(navItem: string) {
    this.selectedItem = navItem;
  }
}
