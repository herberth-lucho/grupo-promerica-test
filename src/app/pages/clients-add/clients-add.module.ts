import { ClientsAddComponent } from './clients-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsAddRoutingModule } from './clients-add-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClientsAddComponent],
  imports: [
    CommonModule,
    ClientsAddRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ClientsAddModule {}
