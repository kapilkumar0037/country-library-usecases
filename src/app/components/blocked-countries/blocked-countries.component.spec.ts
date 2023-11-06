import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedCountriesComponent } from './blocked-countries.component';

describe('BlockedCountriesComponent', () => {
  let component: BlockedCountriesComponent;
  let fixture: ComponentFixture<BlockedCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockedCountriesComponent]
    });
    fixture = TestBed.createComponent(BlockedCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
