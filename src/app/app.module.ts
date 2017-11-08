import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgxPaginationModule } from 'ngx-pagination';

import { CommonServicesModule } from './common/services/common-services.module';

import { AppComponent } from './app.component';

import { AppHeaderModule } from './core/app-header/app-header.module';
import { AppDataModule } from './core/app-data/app-data.module';
import { AppHomepageModule } from './core/app-homepage/app-homepage.module';

import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppHeaderModule,
    AppHomepageModule,
    AppDataModule,
    CommonServicesModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
    JsonpModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
