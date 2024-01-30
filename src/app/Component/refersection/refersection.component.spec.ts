import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefersectionComponent } from './refersection.component';

describe('RefersectionComponent', () => {
  let component: RefersectionComponent;
  let fixture: ComponentFixture<RefersectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefersectionComponent]
    });
    fixture = TestBed.createComponent(RefersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
