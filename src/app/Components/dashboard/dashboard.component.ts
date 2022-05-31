import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productsData: any = [];

  constructor(private productsDataService:ProductsDataService) { }

  ngOnInit(): void {
    this.productsData = this.productsDataService.productsData;
  }

  onAddToCart(i:any) {
    for (let j = 0; j < this.productsDataService.indicesOfCartProducts.length; ++j) {
      if (this.productsDataService.indicesOfCartProducts[j] == i) {
        alert("This item is already added to the cart");
        return;
      }
    }
    this.productsDataService.indicesOfCartProducts.push(i);
  }

}
