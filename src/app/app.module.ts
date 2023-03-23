import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NavbarSocialComponent } from './pages/components/navbar-social/navbar-social.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarSocialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
