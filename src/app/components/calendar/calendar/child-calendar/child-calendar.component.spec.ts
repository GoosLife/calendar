import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCalendarComponent } from './child-calendar.component';

describe('ChildCalendarComponent', () => {
  let component: ChildCalendarComponent;
  let fixture: ComponentFixture<ChildCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
