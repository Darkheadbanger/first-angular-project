import { TestBed } from '@angular/core/testing';

import { LastFMApiService } from './last-fmapi.service';

describe('LastFMApiService', () => {
  let service: LastFMApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastFMApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
