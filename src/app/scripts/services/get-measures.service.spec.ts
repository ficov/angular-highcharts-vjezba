import { TestBed } from '@angular/core/testing';

import { GetMeasuresService } from './get-measures.service';

describe('GetMeasuresService', () => {
  let service: GetMeasuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMeasuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
