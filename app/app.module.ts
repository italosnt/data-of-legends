import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { ChampionsListComponent } from './components/champions/list/champions-list.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'champions-list',
        component: ChampionsListComponent
      }
    ]),
    MaterialModule.forRoot()],
  declarations: [
    AppComponent,
    HomeComponent,
    ChampionsListComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

