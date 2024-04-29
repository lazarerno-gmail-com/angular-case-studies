import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneValidationByCountryComponent } from './phone-validation-by-country.component';

describe('PhoneValidationByCountryComponent', () => {
  let component: PhoneValidationByCountryComponent;
  let fixture: ComponentFixture<PhoneValidationByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneValidationByCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneValidationByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
