import { Routes } from '@angular/router';

import { AppDataComponent } from './core/app-data/app-data.component';
import { AppHomepageComponent } from './core/app-homepage/app-homepage.component';

export const ROUTES: Routes = [
  {path: '', component: AppHomepageComponent},
  {path: 'data', component: AppDataComponent}
];