import { ApiCallService } from './../../shared/services/api-call.service';
import { Component, OnInit } from '@angular/core';

/* export interface Clients {
  id: string;
  nombre: string;
  apellidos: string;
} */

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients$ = this.apiCallService.getClient();
  constructor(private apiCallService: ApiCallService) {}

  ngOnInit(): void {}
}
