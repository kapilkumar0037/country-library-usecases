import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSelectCountryComponent } from './default-select-country.component';

describe('DefaultSelectCountryComponent', () => {
  let component: DefaultSelectCountryComponent;
  let fixture: ComponentFixture<DefaultSelectCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultSelectCountryComponent]
    });
    fixture = TestBed.createComponent(DefaultSelectCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
