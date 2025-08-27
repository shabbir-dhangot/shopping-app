import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { selectItemByName } from '../store/selector/shopping-item.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers/shopping-items.reducer';
import { take } from 'rxjs/internal/operators/take';
import { AddItem, ShoppingItemsActionTypes } from '../store/action/shopping-items.actions';
import { Item } from '../service/shopping-servie.service';

@Component({
  selector: 'app-add-new-shopping-item',
  imports: [Ui5WebcomponentsModule, ReactiveFormsModule],
  templateUrl: './add-new-shopping-item.component.html',
  styleUrl: './add-new-shopping-item.component.less'
})
export class AddNewShoppingItemComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0), Validators.max(1000000)]],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.select(selectItemByName(this.form.value.name))
      .pipe(take(1))
      .subscribe(existingItem => {
        if (existingItem) {
          alert('Item with this name already exists!');
        } else if (this.form.valid) {
          const item:Item = {
            "id": new Date().getTime(),
            "name": this.form.value.name,
            "price": this.form.value.price,
            "quantity": 100,
            "status": "pending",
            "image": this.form.value.image
          }
          this.store.dispatch(new AddItem(item));
        }
      });
    }
  }

  get name() {
    return this.form.get('name');
  }

  get price() {
    return this.form.get('price')!;
  }

  get image() {
    return this.form.get('image')!;
  }
}
