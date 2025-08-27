import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import * as ShoppingItemsActions from '../store/action/shopping-items.actions';
import { Observable } from 'rxjs';
import { Item } from '../service/shopping-servie.service';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

interface AppState {
  shoppingItems: Item[];
  loading: boolean;
}

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

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    console.log('ShoppingListComponent ngOnInit called');
    this.store.dispatch(new ShoppingItemsActions.LoadShoppingItems());
  }
}
