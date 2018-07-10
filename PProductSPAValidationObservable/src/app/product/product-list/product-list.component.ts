import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../shared/product';
import { ProductDataService } from '../shared/product-data.service';

@Component({
  templateUrl: './product-list.component.html',
 styleUrls: ['../../app.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  error: any;
  private subscription: any;
  
  constructor(
    private router: Router,
    private productDataService: ProductDataService) { }

  ngOnInit() {
    this.subscription = this.productDataService.getProducts().subscribe(products => this.products = products );
  }
  
     ngOnDestroy() {
     this.subscription.unsubscribe;
 }
  

}
