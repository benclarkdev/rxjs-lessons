import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, map } from 'rxjs';

@Component({
  templateUrl: './now-batting.component.html'
})
export class NowBattingComponent implements OnInit, OnDestroy {
  playerEverySecond$!: Observable<string>;
  playerSubscription: Subscription = new Subscription;

  batters: string[] = [
    'A. Rodriguez',
    'B. Ruth',
    'C. Ripken Jr.',
    'D. Strawberry',
    'E. Martinez',
    'F. Thomas',
    'G. Stanton',
    'H. Aaron',
    'I. Rodriguez'
  ];

  currentBatter: string = '';

  ngOnInit(): void {
    this.playerEverySecond$ = interval(1000).pipe(
      map(index => { return this.batters[index % 9]})
    );

    this.playerSubscription = this.playerEverySecond$.subscribe(player => {
      this.currentBatter = player;
    });
  }

  ngOnDestroy(): void {
    this.playerSubscription.unsubscribe();
  }
}