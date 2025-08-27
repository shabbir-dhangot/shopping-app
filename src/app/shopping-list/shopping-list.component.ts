import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import * as ShoppingItemsActions from '../store/action/shopping-items.actions';
import { Observable } from 'rxjs';
import { Item, ShoppingService } from '../service/shopping-servie.service';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { AppState } from '../store/reducers/shopping-items.reducer';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [AsyncPipe, Ui5WebcomponentsModule],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.less']
})
export class ShoppingListComponent implements OnInit {
  items$: Observable<Item[]> = this.store.select(state => state.shoppingItems);
  loading$: Observable<boolean> = this.store.select(state => state.loading);

  tempQuantities: Record<number, number> = {};

  constructor(private store: Store<AppState>, private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    console.log('ShoppingListComponent ngOnInit called');
    this.store.dispatch(new ShoppingItemsActions.LoadShoppingItems());
  }

  addItemToCart(item: Item): void {
    this.shoppingService.addItemToCart(item);
  }

  onQuantityChange(event: any, item: any) {
    const newValue = Number(event.target.value);
    this.tempQuantities[item.id] = newValue;
  }

  onSegmentedButtonChange(event: any) {
    const selectedID = event.detail.selectedItems[0].id
    if (selectedID === 'all') {
      this.items$ = this.store.select(state => state.shoppingItems);
    } else {
      this.items$ = this.store.select(state => state.shoppingItems.filter(item => item.status === selectedID));
    }
  }
}
