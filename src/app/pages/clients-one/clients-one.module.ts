import { ClientsOneComponent } from './clients-one.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsOneRoutingModule } from './clients-one-routing.module';


@NgModule({
  declarations: [ClientsOneComponent],
  imports: [
    CommonModule,
    ClientsOneRoutingModule
  ]
})
export class ClientsOneModule { }
