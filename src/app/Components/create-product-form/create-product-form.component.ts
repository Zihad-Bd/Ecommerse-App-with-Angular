import { Component, DoCheck, OnInit } from '@angular/core';
import { User } from 'src/app/Classes/user';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { DateAdapter } from '@angular/material/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent implements OnInit, DoCheck {

  productData = {
    productName: null,
    productShortCode: null,
    category: null,
    price: null,
    description: null,
    imageUrl: null,
    isBestAchived: null,
    createdDate: null,
    origin: null
  };

  categories = ["Monitor", "Keyboard", "Mouse", "Webcam", "Headset", "Graphics Card"];
  origins = ["China", "Finland", "Russia"];
  buttonClicked:string = "";
  nameExist:boolean = false;
  codeExist:boolean = false;
  maxDate:any;

  constructor(
    private dialogRef: MatDialogRef<CreateProductFormComponent>,
    private productsDataService:ProductsDataService) {
  }

  ngOnInit(): void {
  }

  onSubmit(productForm:NgForm) {
    if (this.productsDataService.buttonClicked == "Create") {
      this.productsDataService.productsData.push(productForm.value);
      console.log(productForm.value);
      this.dialogRef.close();
    } else {
      this.productsDataService.productsData[this.productsDataService.editedIndex]
      = productForm.value;
      this.dialogRef.close();
    }
  }

  nameExistCheck(productName:any) {
    for (let i = 0; i < this.productsDataService.productsData.length; ++i) {
      if (this.productsDataService.productsData[i].productName == productName) {
        if (this.productsDataService.buttonClicked == "Edit" && i == 
        this.productsDataService.editedIndex) {
          continue;
        }
        this.nameExist = true;
        return true;
      }
    }
    this.nameExist = false;
    return false;
  }

  codeExistCheck(productShortCode:any) {
    for (let i = 0; i < this.productsDataService.productsData.length; ++i) {
      if (this.productsDataService.productsData[i].productShortCode == productShortCode) {
        if (this.productsDataService.buttonClicked == "Edit" && i ==
          this.productsDataService.editedIndex) {
          continue;
        }        
        this.codeExist = true;
        return true;
      }
    }
    this.codeExist = false;
    return false;
  }

  ngDoCheck(): void {
    this.buttonClicked = this.productsDataService.buttonClicked;
    this.productData = this.productsDataService.productData;
    const date = new Date();
    let todayDate:any = date.getDate();
    if (todayDate < 10) {
      todayDate = "0" + todayDate;
    }
    let month:any = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let year:any = date.getFullYear();
    this.maxDate = year + "-" + month + "-" + todayDate;
  }
}
