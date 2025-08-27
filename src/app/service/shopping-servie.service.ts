import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
export interface Item {
  id: number;
  name: string;
  price: number;
  status?: string;
  image?: string;
  quantity?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  itemsCount = signal(0);

  endpoint = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  loadShoppingItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.endpoint}/api/items`);
  }

  addItemToCart(number: number): void {
    this.itemsCount.update(count => count + number);
  }
}
