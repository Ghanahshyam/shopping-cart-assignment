import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sb-cart-svg',
  templateUrl: './cart-svg.component.html',
  styleUrls: ['./cart-svg.component.scss']
})
export class CartSvgComponent implements OnInit {

  @Input() fillColor:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
