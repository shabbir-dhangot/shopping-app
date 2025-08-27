import { ActionReducerMap } from "@ngrx/store";
import { reducer as shoppingItemReduce, shoppingItemsFeatureKey, ShoppingItemsState } from "./shopping-items.reducer";

export interface State {
  [shoppingItemsFeatureKey]: ShoppingItemsState;
}

export const reducers: ActionReducerMap<State> = {
  [shoppingItemsFeatureKey]: shoppingItemReduce,
};
