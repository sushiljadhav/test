import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  productList = [];
  orderList = [];

  constructor() { 
    this.productList = [
      {
         productID :"1",
         productImgUrl :"assets/images/productwo.jpg",
         productName : "samsung J2 Pro",
         productPrice : "9999.00",
         quantity : 0          
      },
      {
        productID :"2",
        productImgUrl :"assets/images/productone.jpg",
        productName : "Hp Notebook",
        productPrice : "38000.00", 
        quantity : 0         
     },
     {
      productID :"3",
      productImgUrl :"assets/images/productthree.jpg",
      productName : "panassonic T44 Lite",
      productPrice : "7999.00",
      quantity : 0          
   },
   {
    productID :"4",
    productImgUrl :"assets/images/productfour.jpg",
    productName : "titan octane",
    productPrice : "10495.00",
    quantity : 0          
 }]
}



}
