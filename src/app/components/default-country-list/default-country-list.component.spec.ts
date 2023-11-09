import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCountryListComponent } from './default-country-list.component';

describe('DefaultCountryListComponent', () => {
  let component: DefaultCountryListComponent;
  let fixture: ComponentFixture<DefaultCountryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultCountryListComponent]
    });
    fixture = TestBed.createComponent(DefaultCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
