import { createReducer } from '@ngrx/store';
import { ShoppingItemsActions, ShoppingItemsActionTypes } from '../action/shopping-items.actions';
export const shoppingItemsFeatureKey = 'shoppingItems';


export type ShoppingItemsState = [];

export const initialState: ShoppingItemsState = [];

export function shoppingItemsReducer(
  state = initialState,
  action: ShoppingItemsActions
): ShoppingItemsState {
  switch (action.type) {
    case ShoppingItemsActionTypes.LoadShoppingItems:
      return [...state];
    default:
      return state;
  }
}
