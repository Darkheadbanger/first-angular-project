import { TestBed } from '@angular/core/testing';

import { DiscogsAPI } from './discogsAPI.service';

describe('DiscogsAPI', () => {
  let service: DiscogsAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscogsAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
