import { Routes } from '@angular/router';
import { CoverSheetComponent } from './components/cover-sheet/cover-sheet.component';

export const routes: Routes = [
  { 
    path: '',
    component: CoverSheetComponent
  },
  { 
    path: 'introductory-demos',
    loadChildren: () => import('./modules/introductory-demos/introductory-demos.module')
      .then(m => m.IntroductoryDemosModule)
  },
  {
    path: 'advanced-demos',
    loadChildren: () => import('./modules/advanced-demos/advanced-demos.module')
      .then(m => m.AdvancedDemosModule)
  }
];
