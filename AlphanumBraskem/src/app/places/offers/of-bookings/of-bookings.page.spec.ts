import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfBookingsPage } from './of-bookings.page';

describe('OfBookingsPage', () => {
  let component: OfBookingsPage;
  let fixture: ComponentFixture<OfBookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfBookingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfBookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
