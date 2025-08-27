import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
export interface Item {
  id: number;
  name: string;
  price: number;
  status?: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  endpoint = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  loadShoppingItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.endpoint}/api/items`);
  }
}
