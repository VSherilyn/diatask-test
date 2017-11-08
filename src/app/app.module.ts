import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { CommonServicesModule } from './common/services/common-services.module';
import { CommonPipesModule } from './common/pipes/common-pipes.module';

import { AppComponent } from './app.component';

import { AppHeaderModule } from './core/app-header/app-header.module';
import { AppDataModule } from './core/app-data/app-data.module';
import { AppHomepageModule } from './core/app-homepage/app-homepage.module';
import { AppCopyrightModule } from './core/app-copyright/app-copyright.module';

import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppHeaderModule,
    AppHomepageModule,
    AppCopyrightModule,
    AppDataModule,
    CommonServicesModule,
    CommonPipesModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
