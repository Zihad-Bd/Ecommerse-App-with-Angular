import { Component, DoCheck, OnInit } from '@angular/core';
import { User } from 'src/app/Classes/user';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { DateAdapter } from '@angular/material/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { CustomValidatorService } from 'src/app/services/custom-validator.service';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss'],
})
export class CreateProductFormComponent implements OnInit, DoCheck {
  /*productData = {
    productName: null,
    productShortCode: null,
    category: null,
    price: null,
    description: null,
    imageUrl: null,
    isBestAchived: null,
    createdDate: null,
    origin: null
  }; */

  categories = [
    'Monitor',
    'Keyboard',
    'Mouse',
    'Webcam',
    'Headset',
    'Graphics Card',
  ];
  origins = ['China', 'Finland', 'Russia'];
  buttonClicked: string = '';
  nameExist: boolean = false;
  codeExist: boolean = false;
  maxDate: any;

  productForm = new FormGroup({
    productName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      this.customValidatorService.nameExistCheck(),
    ]),
    productShortCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      this.customValidatorService.codeExistCheck(),
    ]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(250),
    ]),
    imageUrl: new FormControl(),
    isBestAchived: new FormControl(),
    createdDate: new FormControl('', [Validators.required]),
    origin: new FormControl('', [Validators.required]),
  });

  constructor(
    private dialogRef: MatDialogRef<CreateProductFormComponent>,
    private productsDataService: ProductsDataService,
    private customValidatorService: CustomValidatorService
  ) {}

  ngOnInit(): void {
    if (this.productsDataService.buttonClicked == "Edit") {
      this.setExistingFormFieldValues();
    }
  }

  get productName() {
    return this.productForm.get('productName');
  }
  get productShortCode() {
    return this.productForm.get('productShortCode');
  }
  get category() {
    return this.productForm.get('category');
  }
  get price() {
    return this.productForm.get('price');
  }
  get description() {
    return this.productForm.get('description');
  }
  get imageUrl() {
    return this.productForm.get('imageUrl');
  }
  get isBestAchived() {
    return this.productForm.get('isBestAchived');
  }
  get createdDate() {
    return this.productForm.get('createdDate');
  }
  get origin() {
    return this.productForm.get('origin');
  }

  onSubmit() {
    if (this.productsDataService.buttonClicked == 'Create') {
      this.productsDataService.productsData.push(this.productForm.value);
      console.log(this.productForm.value);
      this.dialogRef.close();
    } else {
      this.productsDataService.productsData[
        this.productsDataService.editedIndex
      ] = this.productForm.value;
      this.dialogRef.close();
    }
  }

  /*   nameExistCheck(productName: any) {
    for (let i = 0; i < this.productsDataService.productsData.length; ++i) {
      console.log(
        this.productsDataService.productsData[i].productName,
        productName
      );

      if (this.productsDataService.productsData[i].productName == productName) {
        if (
          this.productsDataService.buttonClicked == 'Edit' &&
          i == this.productsDataService.editedIndex
        ) {
          continue;
        }
        console.log('true');

        this.nameExist = true;
        return true;
      }
    }
    this.nameExist = false;
    return false;
  } */

  /* codeExistCheck(productShortCode: any) {
    for (let i = 0; i < this.productsDataService.productsData.length; ++i) {
      if (
        this.productsDataService.productsData[i].productShortCode ==
        productShortCode
      ) {
        if (
          this.productsDataService.buttonClicked == 'Edit' &&
          i == this.productsDataService.editedIndex
        ) {
          continue;
        }
        this.codeExist = true;
        return true;
      }
    }
    this.codeExist = false;
    return false;
  } */

  ngDoCheck(): void {
    this.buttonClicked = this.productsDataService.buttonClicked;
    //this.productForm.value = this.productsDataService.productData;
    //this.setExistingFormFieldValues();
    const date = new Date();
    let todayDate: any = date.getDate();
    if (todayDate < 10) {
      todayDate = '0' + todayDate;
    }
    let month: any = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    let year: any = date.getFullYear();
    this.maxDate = year + '-' + month + '-' + todayDate;
  }

  setExistingFormFieldValues() {
    let productData = {
      productName: this.productsDataService.productData.productName,
      productShortCode: this.productsDataService.productData.productShortCode,
      category: this.productsDataService.productData.category,
      price: this.productsDataService.productData.price,
      description: this.productsDataService.productData.description,
      imageUrl: this.productsDataService.productData.imageUrl,
      isBestAchived: this.productsDataService.productData.isBestAchived,
      createdDate: this.productsDataService.productData.createdDate,
      origin: this.productsDataService.productData.origin
    };
    this.productForm.setValue(productData);
    console.log(this.productForm.value, this.productsDataService.productData);
  }
}
