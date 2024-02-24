import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonClickComponent } from './components/button-click/button-click.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BeatsPerMinuteComponent } from './components/beats-per-minute/beats-per-minute.component';

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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductoryDemosRoutingModule { }