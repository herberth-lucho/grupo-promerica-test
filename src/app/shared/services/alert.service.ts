import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alert = new Subject<any>();
  message = '';
  type = '';

  constructor() {
    this.alert.subscribe((obj) => {
      this.message = obj.message;
      this.type = obj.type;
    });
    this.alert
      .pipe(debounceTime(5000))
      .subscribe(() => (this.message = ''));
  }

  changeMessage(msj: string, MyType: string = 'alert-success') {
    const obj = {
      message: msj,
      type: MyType,
    };
    this.alert.next(obj);
  }
}
