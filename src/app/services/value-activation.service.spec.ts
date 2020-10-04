import { TestBed } from '@angular/core/testing';

import { ValueActivationService } from './value-activation.service';

describe('ValueActivationService', () => {
  let service: ValueActivationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueActivationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
