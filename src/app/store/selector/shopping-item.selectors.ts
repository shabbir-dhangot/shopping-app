import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/shopping-items.reducer';

export const selectShoppingItems = (state: AppState) => state.shoppingItems;

export const selectItemByName = (name: string) =>
  createSelector(selectShoppingItems, (items) =>
    items.find(item => item.name.toLowerCase() === name.toLowerCase())
  );