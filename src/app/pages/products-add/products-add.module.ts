import { ProductsAddComponent } from './products-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsAddRoutingModule } from './products-add-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProductsAddComponent],
  imports: [
    CommonModule,
    ProductsAddRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductsAddModule {}
