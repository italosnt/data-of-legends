import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { ChampionsListComponent } from './components/champions/list/champions-list.component';

import { ChampionsService } from './services/champions.service';

import { KeysValuesPipe } from './pipes/keys-values.pipe';

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
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChampionsListComponent,
    KeysValuesPipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

