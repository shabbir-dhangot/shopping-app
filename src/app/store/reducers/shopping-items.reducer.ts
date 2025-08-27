import { Item } from '../../service/shopping-servie.service';
import { ShoppingItemsActions, ShoppingItemsActionTypes } from '../action/shopping-items.actions';
export const shoppingItemsFeatureKey = 'shoppingItems';

export interface AppState {
  shoppingItems: Item[];
  loading: boolean;
}

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
      return [
        ...state,
        ...action.items.filter(
          loadedItem => !state.some(item => item.id === loadedItem.id)
        )
      ];
    case ShoppingItemsActionTypes.UpdateQuantity:
      return state.map(item =>
        item.id === action.item.id ? { ...item, quantity: action.quantity } : item
      );
    case ShoppingItemsActionTypes.AddItem:
      return [...state, action.item];
    default:
      return state;
  }
}
