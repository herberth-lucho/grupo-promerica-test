import { OrdersOneComponent } from './orders-one.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersOneRoutingModule } from './orders-one-routing.module';


@NgModule({
  declarations: [OrdersOneComponent],
  imports: [
    CommonModule,
    OrdersOneRoutingModule
  ]
})
export class OrdersOneModule { }
