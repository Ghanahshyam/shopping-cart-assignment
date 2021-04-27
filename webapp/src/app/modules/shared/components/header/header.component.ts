import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartFillColor:string = '#cc338b';

  constructor() { }

  ngOnInit(): void {
  }

}
