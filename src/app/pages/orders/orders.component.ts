import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/shared/services/api-call.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders$ = this.apiCallService.getOrders();
  constructor(private apiCallService: ApiCallService) {}

  ngOnInit(): void {}
}
