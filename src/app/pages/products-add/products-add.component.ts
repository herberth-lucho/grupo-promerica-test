import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ApiCallService } from 'src/app/shared/services/api-call.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss'],
})
export class ProductsAddComponent implements OnInit {
  form: FormGroup;
  constructor(
    private apiCallService: ApiCallService,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      nombre: new FormControl(null),
      descripcion: new FormControl(null),
      precio: new FormControl(null),
    });
  }

  onFormSubmit() {
    if (this.form.valid) {
      const data = this.getDataForm();
      this.apiCallService
        .saveProduct(data)
        .pipe(
          catchError((resp: HttpErrorResponse) => {
            if (resp.status === 500) {
              this.alertService.changeMessage(
                '¡ERROR!: ID ya existe en los registros',
                'alert-danger'
              );
            }

            return of(null);
          })
        )
        .subscribe(() => {
          this.form.reset();
          this.alertService.changeMessage('Exito!: Nuevo registro creado');
        });
    }
  }

  getDataForm() {
    const { value } = this.form;

    return {
      id: value.id,
      nombre: value.nombre,
      descripcion: value.descripcion,
      precio: value.precio,
    };
  }

  public isFieldValid(field: string) {
    return (
      !this.form.get(field).valid &&
      (this.form.get(field).dirty || this.form.get(field).touched)
    );
  }
}
