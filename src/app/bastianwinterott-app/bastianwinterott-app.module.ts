import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

import { BastianwinterottAppComponent } from './container/bastianwinterott-app.component';

import { MenuComponent } from './components/menu/menu.component';

import { WelcomeComponent } from './components/content/welcome/welcome.component';
import { AboutmeComponent } from './components/content/aboutme/aboutme.component';
import { ProjectsComponent } from './components/content/projects/projects.component';


export const ROUTES: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  declarations: [
    MenuComponent,
    WelcomeComponent,
    AboutmeComponent,
    ProjectsComponent,
    BastianwinterottAppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  exports: [
    BastianwinterottAppComponent
  ]
})
export class BastianWinterottModule {}