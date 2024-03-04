import { Component } from '@angular/core';
import { ProductService } from '../product-service.service';
import { productClass } from '../productClass';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  constructor(private ListRef: ProductService) {}
  MainProductList : productClass[] = this.ListRef.MainProductList;

  OnDeleteFunction(item: productClass){
    console.log("Delete function called");

    const index = this.ListRef.MainProductList.indexOf(item);
    this.ListRef.MainProductList.splice(index, 1);
    
    return ;
  }
  
}


