import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonClickComponent } from './components/button-click/button-click.component';
import { IntroductoryDemosRoutingModule } from './introductory-demos.routing.module';

@NgModule({
  declarations: [
    ButtonClickComponent,
  ],
  imports: [
    CommonModule,
    IntroductoryDemosRoutingModule
  ]
})
export class IntroductoryDemosModule { }
