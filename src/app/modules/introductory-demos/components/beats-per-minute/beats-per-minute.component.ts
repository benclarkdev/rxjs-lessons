import { Component } from '@angular/core';
import { BeatsPerMinuteService } from './beats-per-minute.service';

@Component({
  templateUrl: './beats-per-minute.component.html'
})
export class BeatsPerMinuteComponent {
  beatsPerMinute: number = 0;
  
  constructor(private bpmService: BeatsPerMinuteService){}
  
  handleTapTempo(): void {
    this.bpmService.recordTap();
  }

  handleClickReset(): void {
    this.bpmService.resetTapHistory();
  }
}