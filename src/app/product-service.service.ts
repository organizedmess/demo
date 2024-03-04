import { Injectable } from '@angular/core';
import { productClass } from './productClass';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  MainProductList: productClass[] = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      description: "This is the first product",
      available: true
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      description: "This is the second product",
      available: false
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      description: "This is the third product",
      available: true
    }
  ];
  id_giver: number = 4;
  constructor() { }
  
}
