import { ProductsOneComponent } from './products-one.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsOneRoutingModule } from './products-one-routing.module';


@NgModule({
  declarations: [ProductsOneComponent],
  imports: [
    CommonModule,
    ProductsOneRoutingModule
  ]
})
export class ProductsOneModule { }
