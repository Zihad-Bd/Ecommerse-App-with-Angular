import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ProductsDataService } from './products-data.service';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor(private productsDataService: ProductsDataService) { }

  nameExistCheck(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let productName = control.value;
      for (let i = 0; i < this.productsDataService.productsData.length; ++i) {
        if (this.productsDataService.productsData[i].productName == productName) {
          if (
            this.productsDataService.buttonClicked == 'Edit' &&
            i == this.productsDataService.editedIndex
          ) {
            continue;
          }
          return {nameExist: true};
        }
      }
      return null;
    }
  }

  codeExistCheck(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let productShortCode = control.value;
      for (let i = 0; i < this.productsDataService.productsData.length; ++i) {
        if (this.productsDataService.productsData[i].productShortCode == productShortCode) {
          if (
            this.productsDataService.buttonClicked == 'Edit' &&
            i == this.productsDataService.editedIndex
          ) {
            continue;
          }
          return {codeExist: true};
        }
      }
      return null;
    }
  }
}
