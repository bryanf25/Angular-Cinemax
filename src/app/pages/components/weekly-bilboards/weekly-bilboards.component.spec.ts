import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { WeeklyBilboardsComponent } from './weekly-bilboards.component';

describe('WeeklyBilboardsComponent', () => {
  let component: WeeklyBilboardsComponent;
  let fixture: ComponentFixture<WeeklyBilboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyBilboardsComponent ],
      imports:[
        FontAwesomeModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyBilboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
