import { Action, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Item } from '../../service/shopping-servie.service';

export enum ShoppingItemsActionTypes {
  LoadShoppingItems = '[ShoppingItems] Load Items',
  LoadShoppingItemsSuccess = '[ShoppingItems] Load Items Success',
  LoadShoppingItemsFailure = '[ShoppingItems] Load Items Failure',
  UpdateQuantity = '[ShoppingItems] Update Quantity',
  AddItem = '[ShoppingItems] Add Item'
}

export class LoadShoppingItems implements Action {
  readonly type = ShoppingItemsActionTypes.LoadShoppingItems;
}

export class LoadShoppingItemsSuccess implements Action {
  readonly type = ShoppingItemsActionTypes.LoadShoppingItemsSuccess;
  constructor(public items: Item[]) {}
}

export class LoadShoppingItemsFailure implements Action {
  readonly type = ShoppingItemsActionTypes.LoadShoppingItemsFailure;
  constructor(public payload: { error: unknown }) {}
}

export class UpdateQuantity implements Action {
  readonly type = ShoppingItemsActionTypes.UpdateQuantity;
  constructor(public item: Item, public quantity: number) {}
}

export class AddItem implements Action {
  readonly type = ShoppingItemsActionTypes.AddItem;
  constructor(public item: Item) {}
}


export type ShoppingItemsActions = LoadShoppingItems | LoadShoppingItemsSuccess | LoadShoppingItemsFailure | UpdateQuantity | AddItem;
