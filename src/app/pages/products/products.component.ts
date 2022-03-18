import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/shared/services/api-call.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$ = this.apiCallService.getProduct();
  constructor(private apiCallService: ApiCallService) {}

  ngOnInit(): void {}
}
