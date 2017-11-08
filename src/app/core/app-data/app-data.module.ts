import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonPipesModule } from '../../common/pipes/common-pipes.module';

import { AppDataComponent } from './app-data.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    CommonPipesModule
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