import { ActivatedRoute } from '@angular/router';
import { ProductCategory } from './../../../../models/product-category.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'sb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  productCategoryListSubs$: Subscription;
  productCategoryList: ProductCategory[];

  productList: Product[];
  productListSubs$: Subscription;

  selectedCategoryId:string;

  constructor(private productsService:ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategoryList();  
    this.getProductList();  
  }

  getCategoryList(): void {
    this.productCategoryListSubs$ = this.productsService.getProductCategoryList()
    .subscribe(categoryList => {
      this.productCategoryList = categoryList;
    })
  }

  getProductList(): void {
    this.productListSubs$ = this.productCategoryListSubs$ = this.productsService.getProductList()
    .subscribe(productList => {
      this.productList = productList;

      this.route.queryParamMap
      .subscribe(params => {
        this.selectedCategoryId = params.get('categoryId');
      });
    })
  }

  ngOnDestroy() {
    this.productCategoryListSubs$.unsubscribe();
    this.productListSubs$.unsubscribe();
  }

  setSelectedCategory(productCategoryId) {
    this.selectedCategoryId = productCategoryId;
  }

}
