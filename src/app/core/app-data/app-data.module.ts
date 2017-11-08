import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppDataComponent } from './app-data.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    AppDataComponent
  ],
  exports: [
    AppDataComponent
  ]
})
export class AppDataModule {
}