import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ShoppingService } from '../../service/shopping-servie.service';
import { LoadShoppingItems, LoadShoppingItemsSuccess, LoadShoppingItemsFailure, ShoppingItemsActionTypes } from '../action/shopping-items.actions';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';



@Injectable()
export class ShoppingItemsEffects {
  loadShoppingItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingItemsActionTypes.LoadShoppingItems),
      mergeMap(() =>
        this.shoppingService.loadShoppingItems().pipe(
          map(items => new LoadShoppingItemsSuccess(items)),
          catchError(error => of(new LoadShoppingItemsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions<LoadShoppingItems>, private shoppingService: ShoppingService) { }
}
