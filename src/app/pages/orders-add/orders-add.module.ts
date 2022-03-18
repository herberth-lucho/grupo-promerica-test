import { OrdersAddComponent } from './orders-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersAddRoutingModule } from './orders-add-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [OrdersAddComponent],
  imports: [
    CommonModule,
    OrdersAddRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class OrdersAddModule {}
