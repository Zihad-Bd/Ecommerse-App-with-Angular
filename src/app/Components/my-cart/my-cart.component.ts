import { Component, DoCheck, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit, DoCheck {

  productsData: any = [];
  indicesOfCartProducts: any = [];
  cartProductQuantities: any = [];
  totalPrice:number = 0;

  constructor(private productsDataService:ProductsDataService) { }

  ngOnInit(): void {
    this.productsData = this.productsDataService.productsData;
  }

  onInputChange(quantity:any, i:any) {
    this.productsDataService.cartProductQuantities[i] = quantity;
    this.cartProductQuantities = this.productsDataService.cartProductQuantities;
  }

  onRemove(i:any) {
    this.productsDataService.indicesOfCartProducts.splice(i, 1);
    this.indicesOfCartProducts = this.productsDataService.indicesOfCartProducts;
    this.productsDataService.cartProductQuantities.splice(i, 1);
    this.cartProductQuantities = this.productsDataService.cartProductQuantities;
  }

  ngDoCheck(): void {
    this.productsData = this.productsDataService.productsData;
    this.indicesOfCartProducts = this.productsDataService.indicesOfCartProducts;
    this.cartProductQuantities = this.productsDataService.cartProductQuantities;
    this.totalPrice = 0;
    for (let i = 0; i < this.indicesOfCartProducts.length; ++i) {
      if ((this.cartProductQuantities[i] == undefined)
        || (this.cartProductQuantities[i] == null) ||
        (this.cartProductQuantities[i] == "")) {
        continue;
      }
      this.totalPrice += this.productsData[this.indicesOfCartProducts[i]].price *
      parseInt(this.cartProductQuantities[i], 10);
    }
  }

}
