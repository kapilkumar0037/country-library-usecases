import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialCodeListComponent } from './dial-code-list.component';

describe('DialCodeListComponent', () => {
  let component: DialCodeListComponent;
  let fixture: ComponentFixture<DialCodeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialCodeListComponent]
    });
    fixture = TestBed.createComponent(DialCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
