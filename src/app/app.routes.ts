import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./shopping-list/shopping-list.routes').then(m => m.routes)
  },
    
];
