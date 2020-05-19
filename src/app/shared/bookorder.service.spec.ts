import { TestBed } from '@angular/core/testing';

import { BookorderService } from './bookorder.service';
//import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BookorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: BookorderService = TestBed.get(BookorderService);
    expect(service).toBeTruthy();
  });
});
