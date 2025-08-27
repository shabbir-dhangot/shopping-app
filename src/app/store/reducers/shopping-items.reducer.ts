import { Item } from '../../service/shopping-servie.service';
import { ShoppingItemsActions, ShoppingItemsActionTypes } from '../action/shopping-items.actions';
export const shoppingItemsFeatureKey = 'shoppingItems';


export type ShoppingItemsState = Item[];

export const initialState: ShoppingItemsState = [];

export function shoppingItemsReducer(
  state = initialState,
  action: ShoppingItemsActions
): ShoppingItemsState {
  switch (action.type) {
    case ShoppingItemsActionTypes.LoadShoppingItems:
      return [...state];
    case ShoppingItemsActionTypes.LoadShoppingItemsSuccess:
      return [...action.items];
    default:
      return state;
  }
}
