import { RestApiService } from './../rest-api/rest-api.service';
import { Injectable } from '@angular/core';
import { ProductCategory } from 'src/app/models/product-category.model';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private restApiService: RestApiService) { }

  urls = {
    offerbanners:'https://my-json-server.typicode.com/Ghanahshyam/sabka-bajar-mock-apis/banners',
    productCategory: 'https://my-json-server.typicode.com/Ghanahshyam/sabka-bajar-mock-apis/categories',
    productsList: 'https://my-json-server.typicode.com/Ghanahshyam/sabka-bajar-mock-apis/products'   
  }

  getProductCategoryList() {
    return <Observable<ProductCategory[]>>(this.restApiService.get(this.urls['productCategory']));
  }

  getProductList() {
    return <Observable<Product[]>>(this.restApiService.get(this.urls['productsList']));
  }
  
}
