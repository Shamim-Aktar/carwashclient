import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookforwashComponent } from './bookforwash.component';

describe('BookforwashComponent', () => {
  let component: BookforwashComponent;
  let fixture: ComponentFixture<BookforwashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookforwashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookforwashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
