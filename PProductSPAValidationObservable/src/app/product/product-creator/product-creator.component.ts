import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Product } from '../shared/product';
import { ProductDataService } from '../shared/product-data.service';
import { Subject } from 'rxjs';
import { finalize } from '../../../../node_modules/rxjs/operators';


@Component({
  templateUrl: './product-creator.component.html',
  styleUrls: ['../../app.component.css']
})
export class ProductCreatorComponent {
  product: Product = new Product();
   productForm: FormGroup;
  private subscription: any;
  
  constructor(private router: Router, 
              private productDataService: ProductDataService,           
              private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.productForm = this.formBuilder.group({
     name: ['',[Validators.required, Validators.minLength(5)]],
     description: '',
     price: ''
    });

   }
  
  // Need to get form control in Template....
     get name() { return this.productForm.get('name'); }
     get description() { return this.productForm.get('description'); }
   
   saveProduct(product: Product) {

     // finally causes navigation to occur AFTER save...
     // Since save is async - this is a good idea -
     // otherwise component will be finished/destroyed and
     // unsubscribe would occur BEFORE save is completed
       this.subscription = this.productDataService.save(product).pipe(
         finalize(() => this.router.navigate(['/products'])))
         .subscribe(product => this.product =  product);
  }
  
  // unsubscribe  ... to avoid memory leak
  ngOnDestroy() {
    this.subscription.unsubscribe;
 }
}
