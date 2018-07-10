import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

import { Product } from '../shared/product';
import { ProductDataService } from '../shared/product-data.service';

@Component({
  templateUrl: './product-details.component.html',
   styleUrls: ['../../app.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = new Product();
   private subscription: any;
  
  constructor(private route: ActivatedRoute, private productDataService: ProductDataService) { }

  ngOnInit() {
    let id = this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.subscription = this.productDataService.getProduct(id).subscribe(product => this.product = product);     
    });
  }
  
   ngOnDestroy() {
     this.subscription.unsubscribe;
 }
  
}
