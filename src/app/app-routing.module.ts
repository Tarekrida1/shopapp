import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboarddComponent } from './components/dashboardd/dashboardd.component';

const routes: Routes = [
  {path: '' , component: HomeComponent , data: {index: 0} },
  {path: 'cart' , component: CartComponent , data: {index: 1} },
  {path: 'goods' , component: GoodsComponent , data: {index: 2} },
  {path: 'login' , component: LoginComponent , data: {index: 3} },
  {path: 'signup' , component: SignupComponent , data: {index: 4} },
  {path: 'dashboard' , component: DashboarddComponent , data: {index: 5} },
  {path: '**' , component: NotFoundComponent , data: {index: 6} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
