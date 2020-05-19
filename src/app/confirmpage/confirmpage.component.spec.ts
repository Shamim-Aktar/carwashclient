import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmpageComponent } from './confirmpage.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ConfirmpageComponent', () => {
  let component: ConfirmpageComponent;
  let fixture: ComponentFixture<ConfirmpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ ConfirmpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
