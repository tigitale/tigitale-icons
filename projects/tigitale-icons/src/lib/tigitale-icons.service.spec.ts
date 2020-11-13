import { TestBed } from '@angular/core/testing';

import { TigitaleIconsService } from './tigitale-icons.service';

describe('TigitaleIconsService', () => {
  let service: TigitaleIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TigitaleIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
