import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NavbarSocialComponent } from './pages/components/navbar-social/navbar-social.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarMenuComponent } from './pages/components/navbar-menu/navbar-menu.component';
import { MoviesFilterComponent } from './pages/components/movies-filter/movies-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarSocialComponent,
    NavbarMenuComponent,
    MoviesFilterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
