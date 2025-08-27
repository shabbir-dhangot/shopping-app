import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ShoppingItemsEffects } from './shopping-items.effects';

describe('ShoppingItemsEffects', () => {
  let actions$: Observable<any>;
  let effects: ShoppingItemsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ShoppingItemsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ShoppingItemsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
