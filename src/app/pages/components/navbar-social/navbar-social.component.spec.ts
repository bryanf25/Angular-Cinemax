import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule } from '@angular/common/http/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageService } from 'src/app/services/landing-page.service';

import { NavbarSocialComponent } from './navbar-social.component';
import { SocialNetwork } from 'src/app/interfaces/social-network.interface';
import { generate, of } from 'rxjs';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

describe('NavbarSocialComponent', () => {
  let component: NavbarSocialComponent;
  let fixture: ComponentFixture<NavbarSocialComponent>;
  let service : LandingPageService;
  let responseMock: SocialNetwork[] = [
    {
      "nombre": "Facebook",
      "url": "https://es-la.facebook.com/"
    },
    {
      "nombre": "Twitter",
      "url": "https://twitter.com/?lang=es"
    },
    {
      "nombre": "Youtube",
      "url": "https://www.youtube.com"
    },
    {
      "nombre": "Instagram",
      "url": "https://www.instagram.com/"
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSocialComponent ],
      imports:[
        FontAwesomeModule,
        HttpClientTestingModule
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSocialComponent);
    component = fixture.componentInstance;
    service = component._landingService
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject LandingPargeService',() => {
    expect(service).toBeTruthy()
  })
  // compruebo que la logica de socialNetwork funcione y me asigne el valor al array socialnetworks
  it('should fill SocialNetworks array correctly when it calls to get the service ',() => {
    // creo un espia con el proposito de cuando al menos se llame la funcion indicada en el servicio
    // este reemplace provisionalmente la funcion para no consumirla relamente en la API
    // y especifico que esta retorna el mock que tengo declarado 
    spyOn(service, 'getSocialNetwork').and.returnValue(of(responseMock))
    component.ngOnInit()
    expect(component.socialNetworkArray).toEqual(responseMock)
  })

  it('should call the callserviceGet at least one time ',() => {
    // callthrough unicamente sirve para especifica que voy realmente a implementar la 
    // funcion callServiceGet, igual funcionaria por defecto sino lo especifico
    spyOn(component, 'callServiceGet').and.callThrough()
    component.ngOnInit()
    expect(component.callServiceGet).toHaveBeenCalled()
  })

  it('should call getFaIcons() inside callServiceGet() ',() => {
    spyOn(service, 'getSocialNetwork').and.returnValue(of(responseMock)); 
    spyOn(component, 'getFaIcons').and.callThrough();
    component.ngOnInit()
    expect(service.getSocialNetwork).toHaveBeenCalled()
    expect(component.getFaIcons).toHaveBeenCalled()
  })

  it('should return an object with the structure of IconDefinition',()=>{
    const icon = component.generateIcon('')
    expect(icon).toBeDefined();
  })
});
