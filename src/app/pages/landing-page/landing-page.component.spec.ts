import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MoviesFilterComponent } from '../components/movies-filter/movies-filter.component';
import { NavbarMenuComponent } from '../components/navbar-menu/navbar-menu.component';
import { NavbarSocialComponent } from '../components/navbar-social/navbar-social.component';
import { SlidesComponent } from '../components/slides/slides.component';
import { WeeklyBilboardsComponent } from '../components/weekly-bilboards/weekly-bilboards.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LandingPageComponent } from './landing-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer  } from '@angular/platform-browser';


xdescribe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let sanitizer: DomSanitizer;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
         LandingPageComponent,
         CarouselComponent,
         FooterComponent,
         MoviesFilterComponent,
         NavbarMenuComponent,
         NavbarSocialComponent,
         SlidesComponent,
         WeeklyBilboardsComponent
         ],
         imports:[
          FontAwesomeModule,
          HttpClientTestingModule,
          ReactiveFormsModule
        ],providers:[DomSanitizer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    component = 

    sanitizer = TestBed.inject(DomSanitizer);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
