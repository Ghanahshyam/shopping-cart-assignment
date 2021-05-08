import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartFillColor:string = '#cc338b';
  isCollapsed:boolean = true;

  constructor(public router: Router) { }

  ngOnInit(): void {
    
  }

}
