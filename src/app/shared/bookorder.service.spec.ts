import { TestBed } from '@angular/core/testing';

import { BookorderService } from './bookorder.service';

describe('BookorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookorderService = TestBed.get(BookorderService);
    expect(service).toBeTruthy();
  });
});
