import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartSvgComponent } from './components/cart-svg/cart-svg.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';

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
    FormsModule
  ],
  exports : [
    CarouselModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    CartSvgComponent
  ]
})
export class SharedModule { }
