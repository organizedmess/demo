import { Component } from '@angular/core';
import { productClass } from '../productClass';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  name: string = "";
  price: number = 0;
  description: string = "";
  available: boolean = false;

  constructor(private ListRef: ProductService) {}
  MainProductList: productClass[] = this.ListRef.MainProductList;

  ngOnInit() {}

  onSubmitFunction(){
    const newProduct = {
      id: this.ListRef.id_giver++,
      name: this.name,
      price: this.price,
      description: this.description,
      available: this.available
    }

    if(newProduct.name == "" || newProduct.price == 0 || newProduct.description == ""){
      alert("Please fill all the fields");
      return ;
    }
    
    this.MainProductList.push(newProduct);
    this.ListRef.MainProductList = this.MainProductList
    
    let ele = <HTMLFormElement>document.querySelector('.ack');
    ele.style.display = "block";

    return ;
  }

}
