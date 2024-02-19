import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonClickComponent } from './components/button-click/button-click.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'button-click', component: ButtonClickComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductoryDemosRoutingModule { }