import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cover-sheet',
  imports: [
    CommonModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './cover-sheet.component.html',
  styleUrl: './cover-sheet.component.scss'
})
export class CoverSheetComponent {
  showBackButton = false;
}
