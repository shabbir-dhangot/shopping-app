import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
  },
    
];
