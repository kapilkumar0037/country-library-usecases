import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlySpecificCountriesComponent } from './only-specific-countries.component';

describe('OnlySpecificCountriesComponent', () => {
  let component: OnlySpecificCountriesComponent;
  let fixture: ComponentFixture<OnlySpecificCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlySpecificCountriesComponent]
    });
    fixture = TestBed.createComponent(OnlySpecificCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
