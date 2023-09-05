import { Component } from '@angular/core';
import { PRODUCTS } from './mock-store';
import { Store } from './store';

@Component({
  selector: 'app-store',
  template: `
  <div class="container">
  <div class="row">
    <div class="col-md-4" *ngFor="let product of productList">
      <div class="card">
        <img src="{{ product.picture }}" class="card-img-top" alt="{{ product.name }}">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.price/100 }} €</p>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-secondary" (click)="addProduct(product)" >+</button>
            <span class="btn btn-light value">{{product.quantity}}</span>
            <button type="button" class="btn btn-secondary" (click)="removeProduct(product)">-</button>
          </div>
          <button type="button" class="btn btn-success add "(click)="addBasket(product)">Ajouter</button>
        </div>
      </div>
    </div>
  </div>
</div>


<div *ngFor="let basket of baskets"></div>

Stot

<div class="cart">
  <h2>Panier</h2>
  <ul>
    <li *ngFor="let basket of baskets">
        {{basket.name}}   {{basket.price/100 * basket.quantity}}€ , quantité: {{basket.quantity}}
    </li>
  </ul>
</div>
`,
  styles: [
  ]
})
export class StoreComponent {

  productList: Store[] = [];
  baskets : Store[] = [];
  quantities: number;
  indexs : number[] = [];

  ngOnInit() {
    this.productList = this.getAllProduct();
    this.baskets;
  }

  getAllProduct() {
    return PRODUCTS;
  }

  addProduct(product: Store) {

    if(product.quantity >= 0) {
      product.quantity++;
    }

  }

  removeProduct(product: Store) {
    if(product.quantity > 0) {
      product.quantity--;
    }
  }

  addBasket(product:Store) {

    // if(this.baskets.find(this.indexs) !== undefined) {

    // }

    const similarName = this.baskets.find(item => item.name === product.name);

    if (similarName) {

    } else {
      this.baskets.push(product);
    }


    // this.baskets = [];
    
    // this.baskets.push(product);
    console.log(this.baskets);
    
    this.quantities = product.quantity;
    

      this.indexs.push(product.id);
      console.log(this.indexs);

  }
}
