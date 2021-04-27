import { ProductCategory } from './../../../../models/product-category.model';
import { ProductsService } from './../../../../services/products/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sb-category-overview-card',
  templateUrl: './category-overview-card.component.html',
  styleUrls: ['./category-overview-card.component.scss']
})
export class CategoryOverviewCardComponent implements OnInit, OnDestroy {
  
  productCategoryList:ProductCategory[];
  productCategoryListSubs$: Subscription;

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getCategoryList();    
  }

  getCategoryList() {
    this.productCategoryListSubs$ = this.productsService.getProductCategoryList()
    .subscribe(categoryList => {
      this.productCategoryList = categoryList;
    })
  }

  ngOnDestroy() {
    this.productCategoryListSubs$.unsubscribe();
  }

}
