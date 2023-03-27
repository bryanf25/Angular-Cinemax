import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarSocialComponent } from './navbar-social.component';

describe('NavbarSocialComponent', () => {
  let component: NavbarSocialComponent;
  let fixture: ComponentFixture<NavbarSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSocialComponent ],
      imports:[
        FontAwesomeModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
