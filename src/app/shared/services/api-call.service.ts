import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const CLIENTS = 'http://localhost:3000/clientes';
export const PRODUCTS = 'http://localhost:3000/productos';
export const ORDERS = 'http://localhost:3000/ordenes';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private http: HttpClient) {}

  getClient() {
    return this.http.get(CLIENTS);
  }

  saveClient(data: any) {
    return this.http.post(CLIENTS, data);
  }

  getClientById(id: string) {
    return this.http.get(CLIENTS + '/' + id);
  }

  getProduct() {
    return this.http.get(PRODUCTS);
  }

  saveProduct(data: any) {
    return this.http.post(PRODUCTS, data);
  }

  getProductById(id: string) {
    return this.http.get(PRODUCTS + '/' + id);
  }

  getOrders() {
    return this.http.get(ORDERS);
  }

  saveOrders(data: any) {
    return this.http.post(ORDERS, data);
  }
}
