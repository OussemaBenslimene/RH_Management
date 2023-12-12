import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { notconnectedGuard } from './notconnected.guard';

describe('notconnectedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notconnectedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
