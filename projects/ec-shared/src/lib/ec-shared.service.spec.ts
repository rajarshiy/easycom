import { TestBed } from '@angular/core/testing';

import { EcSharedService } from './ec-shared.service';

describe('EcSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EcSharedService = TestBed.get(EcSharedService);
    expect(service).toBeTruthy();
  });
});
