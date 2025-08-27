import { createActionGroup, emptyProps, props } from '@ngrx/store';

export enum ShoppingItemsActionTypes {
  LoadShoppingItems = '[ShoppingItems] Load Items',
  LoadShoppingItemsSuccess = '[ShoppingItems] Load Items Success',
  LoadShoppingItemsFailure = '[ShoppingItems] Load Items Failure',
}

export class LoadShoppingItems {
  readonly type = ShoppingItemsActionTypes.LoadShoppingItems;
}

export class LoadShoppingItemsSuccess {
  readonly type = ShoppingItemsActionTypes.LoadShoppingItemsSuccess;
  constructor(public payload: { data: unknown }) {}
}

export class LoadShoppingItemsFailure {
  readonly type = ShoppingItemsActionTypes.LoadShoppingItemsFailure;
  constructor(public payload: { error: unknown }) {}
}

export type ShoppingItemsActions = LoadShoppingItems | LoadShoppingItemsSuccess | LoadShoppingItemsFailure;
