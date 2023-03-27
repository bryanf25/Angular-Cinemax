import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SlidesComponent } from './slides.component';

describe('SlidesComponent', () => {
  let component: SlidesComponent;
  let fixture: ComponentFixture<SlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidesComponent ],
      imports:[
        FontAwesomeModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
