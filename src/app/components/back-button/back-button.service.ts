import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BackButtonService {
  private showBackButtonSubject = new BehaviorSubject<boolean>(false);

  showBackButton$ = this.showBackButtonSubject.asObservable();

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const shouldShow = this.router.url !== '/';
        
        this.showBackButtonSubject.next(shouldShow);
      }
    });
  }
}