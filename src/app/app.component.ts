import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ShoppingService } from './service/shopping-servie.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Ui5WebcomponentsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'shopping-app';
  cartItemCount = this.shoppingService.itemsCount;

    constructor(private shoppingService: ShoppingService, private router:Router) {}

    navigateToAddItem(){
      this.router.navigate(['/add-item']);
    }

    navigateHome(){
      this.router.navigate(['/']);
    }

    navigateToCart(){
      if(this.cartItemCount() === 0) {
        alert("Cart is empty");
      } else {
        alert("yet to implement cart navigation");
      }
    }

}
