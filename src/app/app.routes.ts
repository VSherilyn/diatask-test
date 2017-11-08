import { Routes } from '@angular/router';

import { AppDataComponent } from './core/app-data/app-data.component';
import { AppHomepageComponent } from './core/app-homepage/app-homepage.component';
import { AppCopyrightComponent } from './core/app-copyright/app-copyright.component';

export const ROUTES: Routes = [
  {path: '', component: AppHomepageComponent},
  {path: 'data', component: AppDataComponent},
  {path: 'copyright', component: AppCopyrightComponent}
];