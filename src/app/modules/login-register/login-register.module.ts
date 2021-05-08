import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EntryComponent } from './components/entry/entry.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    EntryComponent
  ],
  imports: [
    CommonModule,
    LoginRegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class LoginRegisterModule { }
