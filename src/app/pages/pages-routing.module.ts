import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'clientes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./clients/clients.module').then((m) => m.ClientsModule),
          },
          {
            path: 'agregar',
            loadChildren: () =>
              import('./clients-add/clients-add.module').then(
                (m) => m.ClientsAddModule
              ),
          },
          {
            path: 'mostrar/:id',
            loadChildren: () =>
              import('./clients-one/clients-one.module').then(
                (m) => m.ClientsOneModule
              ),
          },
        ],
      },
      {
        path: 'ordenes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./orders/orders.module').then((m) => m.OrdersModule),
          },
          {
            path: 'agregar',
            loadChildren: () =>
              import('./orders-add/orders-add.module').then(
                (m) => m.OrdersAddModule
              ),
          },
          {
            path: 'mostrar/:id',
            loadChildren: () =>
              import('./orders-one/orders-one.module').then(
                (m) => m.OrdersOneModule
              ),
          },
        ],
      },
      {
        path: 'productos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./products/products.module').then(
                (m) => m.ProductsModule
              ),
          },
          {
            path: 'agregar',
            loadChildren: () =>
              import('./products-add/products-add.module').then(
                (m) => m.ProductsAddModule
              ),
          },
          {
            path: 'mostrar/:id',
            loadChildren: () =>
              import('./products-one/products-one.module').then(
                (m) => m.ProductsOneModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
