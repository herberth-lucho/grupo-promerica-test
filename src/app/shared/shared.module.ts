import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { LoadingDirective } from './directives/loading.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FieldErrorDisplayComponent,
    CapitalizadoPipe,
    LoadingDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FieldErrorDisplayComponent,
    CapitalizadoPipe,
    LoadingDirective,
  ],
})
export class SharedModule {}
