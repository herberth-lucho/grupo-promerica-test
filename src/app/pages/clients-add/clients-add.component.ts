import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ApiCallService } from 'src/app/shared/services/api-call.service';

@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.scss'],
})
export class ClientsAddComponent implements OnInit {
  form: FormGroup;
  constructor(
    private apiCallService: ApiCallService,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      nombre: new FormControl(null),
      apellidos: new FormControl(null),
      telefono: new FormControl(null, [
        Validators.pattern('[- +()0-9]+'),
        Validators.maxLength(9),
      ]),
      correo: new FormControl(null, Validators.email),
      nit: new FormControl(null, [
        Validators.pattern('[- +()0-9]+'),
        Validators.maxLength(17),
      ]),
    });
  }

  onFormSubmit() {
    if (this.form.valid) {
      const data = this.getDataForm();
      this.apiCallService
        .saveClient(data)
        .pipe(
          catchError((resp: HttpErrorResponse) => {
            if (resp.status === 500) {
              this.alertService.changeMessage(
                '¡ERROR!: ID ya existe en los registros', 'alert-danger'
              );
            }

            return of(null);
          })
        )
        .subscribe(() => {
          this.form.reset();
          this.alertService.changeMessage(
            'Exito!: Nuevo registro creado'
          );
        });
    }
  }

  getDataForm() {
    const { value } = this.form;

    return {
      id: value.id,
      nombre: value.nombre,
      apellidos: value.apellidos,
      telefono: value.telefono,
      correo: value.correo,
      nit: value.nit,
    };
  }

  public isFieldValid(field: string) {
    return (
      !this.form.get(field).valid &&
      (this.form.get(field).dirty || this.form.get(field).touched)
    );
  }
}
