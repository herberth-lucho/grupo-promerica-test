import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from 'src/app/shared/services/api-call.service';

@Component({
  selector: 'app-clients-one',
  templateUrl: './clients-one.component.html',
  styleUrls: ['./clients-one.component.scss'],
})
export class ClientsOneComponent implements OnInit {
  client$: Observable<any>;
  constructor(
    public activatedRoute: ActivatedRoute,
    private apiCallService: ApiCallService
  ) {
    this.activatedRoute.parent.params.subscribe((queryParams: any) => {
      this.client$ = this.apiCallService.getClientById(queryParams.id);
    });
  }

  ngOnInit(): void {}
}
