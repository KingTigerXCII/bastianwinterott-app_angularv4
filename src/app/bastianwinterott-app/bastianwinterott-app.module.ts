import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';

import { WelcomeComponent } from './components/content/welcome/welcome.component';
import { AboutmeComponent } from './components/content/aboutme/aboutme.component';
import { ProjectsComponent } from './components/content/projects/projects.component';

@NgModule({
  declarations: [
    MenuComponent,
    ContentComponent,
    WelcomeComponent,
    AboutmeComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule
  ],
  providers: [],
  exports: [
    MenuComponent,
    ContentComponent
  ]
})
export class BastianWinterottModule {}