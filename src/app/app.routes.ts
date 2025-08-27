import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
  },
  {
    path: 'add-item',
    loadChildren: () =>
      import('./add-new-shopping-item/add-new-shopping-item.module').then(m => m.AddNewShoppingItemModule)
  }
];