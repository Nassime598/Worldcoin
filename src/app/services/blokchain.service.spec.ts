import { TestBed } from '@angular/core/testing';

import { BlokchainService } from './blokchain.service';

describe('BlokchainService', () => {
  let service: BlokchainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlokchainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
