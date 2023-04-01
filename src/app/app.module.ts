import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NavbarSocialComponent } from './pages/components/navbar-social/navbar-social.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarMenuComponent } from './pages/components/navbar-menu/navbar-menu.component';
import { MoviesFilterComponent } from './pages/components/movies-filter/movies-filter.component';
import { SlidesComponent } from './pages/components/slides/slides.component';
import { WeeklyBilboardsComponent } from './pages/components/weekly-bilboards/weekly-bilboards.component';
import { CarouselComponent } from './pages/components/carousel/carousel.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { LandingPageService } from './services/landing-page.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import localeEs from '@angular/common/locales/es-CO'
import { registerLocaleData } from "@angular/common";
import {  ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localeEs)


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarSocialComponent,
    NavbarMenuComponent,
    MoviesFilterComponent,
    SlidesComponent,
    WeeklyBilboardsComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
