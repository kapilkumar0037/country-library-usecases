import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPropertiesDemoComponent } from './config-properties-demo.component';

describe('ConfigPropertiesDemoComponent', () => {
  let component: ConfigPropertiesDemoComponent;
  let fixture: ComponentFixture<ConfigPropertiesDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigPropertiesDemoComponent]
    });
    fixture = TestBed.createComponent(ConfigPropertiesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
