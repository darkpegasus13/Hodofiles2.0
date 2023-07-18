import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationClassComponent } from './location-class.component';

describe('LocationClassComponent', () => {
  let component: LocationClassComponent;
  let fixture: ComponentFixture<LocationClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
