import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ApiCallService } from 'src/app/shared/services/api-call.service';

@Component({
  selector: 'app-orders-add',
  templateUrl: './orders-add.component.html',
  styleUrls: ['./orders-add.component.scss'],
})
export class OrdersAddComponent implements OnInit {
  clients$ = this.apiCallService.getClient();
  products$ = this.apiCallService.getProduct();

  form: FormGroup;
  constructor(
    private apiCallService: ApiCallService,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      idOrden: new FormControl(null, Validators.required),
      idProducto: new FormControl(null, Validators.required),
      idCliente: new FormControl(null, Validators.required),
      cantidad: new FormControl(null),
      fecha: new FormControl(null),
    });
  }

  onFormSubmit() {
    if (this.form.valid) {
      const data = this.getDataForm();
      this.apiCallService
        .saveOrders(data)
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
      id: value.idOrden,
      idProducto: value.idProducto,
      idCliente: value.idCliente,
      cantidad: value.cantidad,
      fecha: value.fecha,
    };
  }

  public isFieldValid(field: string) {
    return (
      !this.form.get(field).valid &&
      (this.form.get(field).dirty || this.form.get(field).touched)
    );
  }
}
