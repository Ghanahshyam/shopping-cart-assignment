import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: EntryComponent,
    children:[
      { path: '', redirectTo:'login', pathMatch:'full'},
      { path: 'login', component: LoginComponent, data:{ page: 'login'} },
      { path: 'register', component: RegisterComponent, data:{ page: 'register'} }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegisterRoutingModule { }
