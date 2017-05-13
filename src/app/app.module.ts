import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BastianWinterottModule } from './bastianwinterott-app/bastianwinterott-app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BastianWinterottModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
