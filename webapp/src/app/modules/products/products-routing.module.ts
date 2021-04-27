import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo: 'home' },
  { path:'home', component: HomeComponent },
  { path:'list', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
