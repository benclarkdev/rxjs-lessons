import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonClickComponent } from './components/button-click/button-click.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BeatsPerMinuteComponent } from './components/beats-per-minute/beats-per-minute.component';
import { NowBattingComponent } from './components/now-batting/now-batting.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: 'button-click',
        component: ButtonClickComponent
      },
      {
        path: 'bpm',
        component: BeatsPerMinuteComponent
      },
      {
        path: 'now-batting',
        component: NowBattingComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductoryDemosRoutingModule { }