import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductCreatorComponent } from './product/product-creator/product-creator.component';
import { ProductDataService } from './product/shared/product-data.service';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
 
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductCreatorComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
        ProductDataService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
