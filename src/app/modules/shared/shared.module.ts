import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartSvgComponent } from './components/cart-svg/cart-svg.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// NGX-BOOTSTRAP-IMPORTS
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartSvgComponent
  ],
  imports: [
    CarouselModule,
    RouterModule,
    CommonModule,
    CollapseModule.forRoot(),
    FormsModule,
  ],
  exports : [
    FormsModule,
    HeaderComponent,
    FooterComponent,
    CartSvgComponent,
    CarouselModule,
    CollapseModule
  ]
})
export class SharedModule { }
