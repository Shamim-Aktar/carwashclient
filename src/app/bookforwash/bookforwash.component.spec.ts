import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookforwashComponent } from './bookforwash.component';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookorderService } from '../shared/bookorder.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookforwashComponent', () => {
  let component: BookforwashComponent;
  let fixture: ComponentFixture<BookforwashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[BrowserModule, FormsModule, HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ BookforwashComponent ],
      providers:[BookorderService]
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
  it('should be created', () => {
    const service: BookorderService = TestBed.get(BookorderService);
    expect(service).toBeTruthy();
   });
});
