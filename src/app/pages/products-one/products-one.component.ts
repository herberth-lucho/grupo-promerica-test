import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiCallService } from 'src/app/shared/services/api-call.service';

@Component({
  selector: 'app-products-one',
  templateUrl: './products-one.component.html',
  styleUrls: ['./products-one.component.scss'],
})
export class ProductsOneComponent implements OnInit {
  product$: Observable<any>;
  constructor(
    public activatedRoute: ActivatedRoute,
    private apiCallService: ApiCallService
  ) {
    this.activatedRoute.parent.params.subscribe((queryParams: any) => {
      this.product$ = this.apiCallService.getProductById(queryParams.id);
    });
  }

  ngOnInit(): void {}
}
