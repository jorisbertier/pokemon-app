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



<div class="card mb-3">
                  <div class="card-body" *ngFor="let basket of baskets" >
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src="{{basket.picture}}"
                            class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                        </div>
                        <div class="ms-3">
                          <h5>Iphone 11 pro</h5>
                          <p class="small mb-0">{{basket.name}}</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <div style="width: 50px;">
                          <h5 class="fw-normal mb-0">{{basket.quantity}}</h5>
                        </div>
                        <div style="width: 80px;">
                          <h5 class="mb-0">{{basket.price/100 * basket.quantity}} €</h5>
                        </div>
                        <div style="width: 80px;">
                          <!-- <button class="btn btn-danger" (click)="removeProductBasket(product)">Delete</button> -->
                        </div>
                        <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
                      </div>
                    </div>
                  </div>
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
    const similarName = this.baskets.find(item => item.name === product.name);

    if (similarName) {

    } else {
      this.baskets.push(product);
    }
    
    this.quantities = product.quantity

    this.indexs.push(product.id);

  }

  // removeProductBasket(baskets) {
  //   const similarName = this.baskets.find(item => item.name === product.name);

  //   if (similarName) {
  //     this.baskets.splice(product.id);
  //   } else {
      
  //   }
  // }
}
