import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppHomepageComponent } from './app-homepage.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AppHomepageComponent
  ],
  exports: [
    AppHomepageComponent
  ]
})
export class AppHomepageModule {
}