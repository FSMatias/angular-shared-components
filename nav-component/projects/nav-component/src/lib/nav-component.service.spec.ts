import { TestBed } from '@angular/core/testing';

import { NavComponentService } from './nav-component.service';

describe('NavComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavComponentService = TestBed.get(NavComponentService);
    expect(service).toBeTruthy();
  });
});
