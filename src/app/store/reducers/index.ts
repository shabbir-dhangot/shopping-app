import { ActionReducerMap } from "@ngrx/store";
import { shoppingItemsFeatureKey, shoppingItemsReducer, ShoppingItemsState } from "./shopping-items.reducer";
import { ShoppingItemsActions } from "../action/shopping-items.actions";

export interface State {
  [shoppingItemsFeatureKey]: ShoppingItemsState;
}

export const reducers: ActionReducerMap<State, ShoppingItemsActions> = {
  [shoppingItemsFeatureKey]: shoppingItemsReducer,
};
