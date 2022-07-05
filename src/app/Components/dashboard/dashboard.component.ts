import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  productsData: any = [];
  cartProductQuantities: any = [];
  indicesOfCartProducts: any = [];

  constructor(
    private productsDataService: ProductsDataService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productsData = this.productsDataService.productsData;
    this.cartProductQuantities = this.productsDataService.cartProductQuantities;
    this.indicesOfCartProducts = this.productsDataService.indicesOfCartProducts;
    this.productsDataService.cartProductQuantitiesChanged.subscribe((value) => {
      console.log(value);

      this.cartProductQuantities = value;
    });
    this.productsDataService.indicesOfCartProductsChanged.subscribe((value) => {
      console.log(value);

      this.indicesOfCartProducts = value;
    });
    console.log(this.cartProductQuantities);
  }

  onAddToCart(i: any) {
    let sb = this.snackBar.open('Item added to cart', 'Close', {
      duration: 4000,
      panelClass: ['snackbar'],
    });
    sb.onAction().subscribe(() => {
      sb.dismiss();
    });
    for (
      let j = 0;
      j < this.productsDataService.indicesOfCartProducts.length;
      ++j
    ) {
      if (this.productsDataService.indicesOfCartProducts[j] == i) {
        alert('This item is already added to the cart');
        return;
      }
    }

    //this.productsDataService.indicesOfCartProducts.push(i);
    this.productsDataService.updateindicesOfCartProducts(i);
    this.productsDataService.updatecartProductQuantities(
      1,
      this.productsDataService.indicesOfCartProducts.length - 1
    );
    /*     this.productsDataService.cartProductQuantities[
      this.productsDataService.indicesOfCartProducts.length - 1
    ] = 1; */
    console.log(this.productsDataService.cartProductQuantities);
  }

  addedToCart(i: any) {
    for (
      let j = 0;
      j < this.productsDataService.indicesOfCartProducts.length;
      ++j
    ) {
      if (this.productsDataService.indicesOfCartProducts[j] == i) {
        return true;
      }
    }
    return false;
  }

  getQuantity(i: any) {
    for (let j = 0; j < this.indicesOfCartProducts.length; ++j) {
      if (this.indicesOfCartProducts[j] == i) {
        return this.cartProductQuantities[j];
      }
    }
  }

  onClickOnRemove(i: any) {
    let quantityBefore = this.getQuantity(i);
    let indexInCart = this.indicesOfCartProducts.indexOf(i);
    if (quantityBefore == 1) {
      this.productsDataService.updateindicesOfCartProductsOnRemove(indexInCart);
      this.indicesOfCartProducts =
        this.productsDataService.indicesOfCartProducts;
      this.productsDataService.updatecartProductQuantitiesOnRemove(indexInCart);
      this.cartProductQuantities =
        this.productsDataService.cartProductQuantities;
    } else {
      this.productsDataService.updatecartProductQuantities(
        quantityBefore - 1,
        indexInCart
      );
    }
  }

  onClickOnAdd(i: any) {
    let quantityBefore = this.getQuantity(i);
    let indexInCart = this.indicesOfCartProducts.indexOf(i);
    this.productsDataService.updatecartProductQuantities(
      quantityBefore + 1,
      indexInCart
    );
  }
}
