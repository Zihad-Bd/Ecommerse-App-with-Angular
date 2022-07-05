import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
/* import * as internal from 'stream'; */

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  productsData: any = [
    {
      productName: `BENGOO G9000 Gaming Headset`,
      productShortCode: '101',
      category: 'Headset',
      price: 30,
      description: `PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo`,
      imageUrl: `assets/images/BENGOO G9000 Stereo Gaming Headset.jpg`,
      isBestAchived: 'true',
      createdDate: '',
      origin: 'Finland',
    },

    {
      productName: `SteelSeries Apex 3 Keyboard`,
      productShortCode: '102',
      category: `Keyboard`,
      price: 34,
      description: `10-Zone RGB Illumination – IP32 Water Resistant – Premium Magnetic Wrist Rest (Whisper Quiet Gaming Switch)`,
      imageUrl: `assets/images/SteelSeries Apex 3 RGB Gaming Keyboard.jpg`,
      isBestAchived: 'true',
      createdDate: '',
      origin: 'China',
    },

    {
      productName: `Razer DeathAdder Mouse`,
      productShortCode: '103',
      category: `Mouse`,
      price: 18,
      description: `6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black`,
      imageUrl: `assets/images/Razer DeathAdder Essential Gaming Mouse.jpg`,
      isBestAchived: 'false',
      createdDate: '',
      origin: 'Russia',
    },

    {
      productName: `Sceptre 24" 1080p Monitor`,
      productShortCode: '104',
      category: `Monitor`,
      price: 135,
      description: `2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)`,
      imageUrl: `assets/images/Sceptre 24 inch 1080p Monitor.jpg`,
      isBestAchived: 'true',
      createdDate: '',
      origin: 'China',
    },

    {
      productName: `Logitech C920x HD Pro Webcam`,
      productShortCode: '105',
      category: `Webcam`,
      price: 59,
      description: `Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/Macbook/Tablet - Black`,
      imageUrl: `assets/images/Logitech C920x HD Pro Webcam.jpg`,
      isBestAchived: 'false',
      createdDate: '',
      origin: 'Finland',
    },

    {
      productName: `MSI Gaming GeForce RTX 3090 Ti`,
      productShortCode: '106',
      category: `Graphics Card`,
      price: 1500,
      description: `24GB GDRR6X 384-Bit HDMI/DP Nvlink Tri-Frozr Ampere Architecture OC Graphics Card (RTX 3090 Ti SUPRIM X 24G)`,
      imageUrl: `assets/images/MSI Gaming GeForce RTX 3090 Ti.jpg`,
      isBestAchived: 'true',
      createdDate: '',
      origin: 'Russia',
    },
  ];
  indicesOfCartProducts: any = [];
  productData: any;
  buttonClicked: string = '';
  editedIndex: any;
  cartProductQuantities: any = [];
  cartProductQuantitiesChanged: Subject<any[]> = new Subject<any[]>();
  indicesOfCartProductsChanged: Subject<any[]> = new Subject<any[]>();

  updatecartProductQuantities(quantity: any, i: any) {
    this.cartProductQuantities[i] = quantity;
    this.cartProductQuantitiesChanged.next(this.cartProductQuantities);
  }
  updatecartProductQuantitiesOnRemove(i: any) {
    this.cartProductQuantities.splice(i, 1);
    console.log(this.cartProductQuantities);
    
    this.cartProductQuantitiesChanged.next(this.cartProductQuantities);
  }

  updateindicesOfCartProducts(i: any) {
    this.indicesOfCartProducts.push(i);
    this.indicesOfCartProductsChanged.next(this.indicesOfCartProducts);
  }

  updateindicesOfCartProductsOnRemove(i: any) {
    this.indicesOfCartProducts.splice(i, 1);
    console.log(this.indicesOfCartProducts);
    
    this.indicesOfCartProductsChanged.next(this.indicesOfCartProducts);
  }

  constructor() {}

  existingProductData(productData: any) {
    this.productData = productData;
  }

  clearProductData() {
    this.productData = {};
  }
}
