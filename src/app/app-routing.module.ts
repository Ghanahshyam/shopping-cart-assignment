import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'products'},
  {path: 'user', loadChildren: () => import('./modules/login-register/login-register.module').then((m)=> m.LoginRegisterModule) },
  {path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then((m)=> m.CartModule) },
  {path: 'products', loadChildren: () => import('./modules/products/products.module').then((m)=> m.ProductsModule) },
  // {path: 'payment', loadChildren: () => import('./modules/products/payment.module').then((m)=> m.ProductsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
