import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeatsPerMinuteService {
  constructor(){}

  recordTap(): void {}
  resetTapHistory(): void {}
}