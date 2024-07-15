import { TestBed } from '@angular/core/testing';

import { DhmzCipConstantsService } from './dhmz-cip-constants.service';

describe('DhmzCipConstantsService', () => {
  let service: DhmzCipConstantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DhmzCipConstantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
