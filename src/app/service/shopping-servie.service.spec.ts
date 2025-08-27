import { TestBed } from '@angular/core/testing';

import { ShoppingServieService } from './shopping-servie.service';

describe('ShoppingServieService', () => {
  let service: ShoppingServieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingServieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
