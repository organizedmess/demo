import { Component, OnInit } from '@angular/core';
import { productClass } from '../../productClass';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product-service.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})

export class DetailPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private ListRef: ProductService) { }

  productId!: number;
  product: productClass = new productClass();
  
  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
    const temp = this.ListRef.MainProductList.find((product: productClass) => product.id == this.productId);
    if(temp){
      this.product = temp;
    }
    else{
      alert("Product not found");
    }
  }

}
