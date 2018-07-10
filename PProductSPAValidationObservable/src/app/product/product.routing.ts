 
import {Routes} from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
  import { ProductCreatorComponent } from './product-creator/product-creator.component';
   
export const productRoutes: Routes = [
  {
     path: 'products/new',
    component: ProductCreatorComponent
  },
    {
    path: 'products/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  }

 ];


