import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcardetailComponent } from './addcardetail.component';

describe('AddcardetailComponent', () => {
  let component: AddcardetailComponent;
  let fixture: ComponentFixture<AddcardetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcardetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcardetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
