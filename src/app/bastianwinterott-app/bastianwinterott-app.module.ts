import { NgModule } from '@angular/core';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MdToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
      MdToolbarModule
  ],
  providers: [],
  exports: [
      WelcomeComponent
  ]
})
export class BastianWinterottModule {}