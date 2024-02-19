import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { BackButtonService } from './back-button.service';

@Component({
  selector: 'back-button',
  imports: [
    CommonModule,
    RouterLink
  ],
  providers: [
    BackButtonService
  ],
  standalone: true,
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.scss'
})
export class BackButtonComponent {
  showBackButton = false;

  constructor(
    private backButtonService: BackButtonService,
    private router: Router
  ){
    this.backButtonService.showBackButton$.subscribe((showBackButton) => {
      this.showBackButton = showBackButton;
    });
  }

  goBack(): void {
    this.router.navigate(['/']); // Navigates back to the root route in this example
  }
}
