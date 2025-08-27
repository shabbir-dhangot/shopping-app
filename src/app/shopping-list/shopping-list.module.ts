import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './shopping-list.routes';

@NgModule({
  imports: [CommonModule, ShoppingListComponent, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListModule {}
