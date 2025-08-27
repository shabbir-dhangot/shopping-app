import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddNewShoppingItemComponent } from './add-new-shopping-item.component';

export const routes: Routes = [
  {
    path: '',
    component: AddNewShoppingItemComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), AddNewShoppingItemComponent],
  exports: [RouterModule]
})
export class AddNewShoppingItemModule {}
