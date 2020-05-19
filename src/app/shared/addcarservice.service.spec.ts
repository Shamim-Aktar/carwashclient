import { TestBed } from '@angular/core/testing';

import { AddcarserviceService } from './addcarservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AddcarserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[ HttpClientTestingModule],
    providers: [ AddcarserviceService ]
  }));

  it('should be created', () => {
    const service: AddcarserviceService = TestBed.get(AddcarserviceService);
    expect(service).toBeTruthy();
  });
});
