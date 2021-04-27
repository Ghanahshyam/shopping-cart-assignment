import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-offers-carousel',
  templateUrl: './offers-carousel.component.html',
  styleUrls: ['./offers-carousel.component.scss']
})
export class OffersCarouselComponent implements OnInit {
  
  constructor() { }

  offerList = [
    { imgPath:'static/images/offers/offer1.jpg', altName:'first slide'},
    { imgPath:'static/images/offers/offer2.jpg', altName:'second slide' },
    { imgPath:'static/images/offers/offer3.jpg', altName:'third slide' },
    { imgPath:'static/images/offers/offer4.jpg', altName:'fourth slide' },
    { imgPath:'static/images/offers/offer5.jpg', altName:'fifth slide' }
  ]

  ngOnInit(): void {
  }

  

}
