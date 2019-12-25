import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgAlertModule } from 'projects/ng-alert/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgAlertModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
