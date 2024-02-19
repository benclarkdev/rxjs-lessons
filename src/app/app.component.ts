import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { BackButtonComponent } from './components/back-button/back-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CommonModule,
    BackButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs-lessons';
}
