import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true, // ✅ Required for standalone
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // ✅ Correct property name
})
export class HomeComponent {

}
