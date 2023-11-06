import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredCountriesComponent } from './preferred-countries.component';

describe('PreferredCountriesComponent', () => {
  let component: PreferredCountriesComponent;
  let fixture: ComponentFixture<PreferredCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreferredCountriesComponent]
    });
    fixture = TestBed.createComponent(PreferredCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
