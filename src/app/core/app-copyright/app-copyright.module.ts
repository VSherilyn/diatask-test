import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppCopyrightComponent } from './app-copyright.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AppCopyrightComponent
  ],
  exports: [
    AppCopyrightComponent
  ]
})
export class AppCopyrightModule {
}