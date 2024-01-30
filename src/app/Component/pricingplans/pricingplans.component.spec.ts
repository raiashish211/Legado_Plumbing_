import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingplansComponent } from './pricingplans.component';

describe('PricingplansComponent', () => {
  let component: PricingplansComponent;
  let fixture: ComponentFixture<PricingplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricingplansComponent]
    });
    fixture = TestBed.createComponent(PricingplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
