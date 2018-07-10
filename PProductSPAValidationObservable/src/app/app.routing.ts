import { NgModule }  from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { productRoutes } from './product/product.routing';


const routes: Routes = [
  {
    path: '',         // default
    redirectTo: '/products/new',
    pathMatch: 'full' 
  },
  
     ...productRoutes
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
  
export class AppRoutingModule {}

