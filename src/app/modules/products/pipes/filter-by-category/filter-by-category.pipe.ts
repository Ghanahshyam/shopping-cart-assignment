import { Product } from 'src/app/models/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(productsList: Product[], selectedCategoryId: string): Product[] {
    return productsList && selectedCategoryId ? 
          productsList.filter(product => product.category === selectedCategoryId)
          : productsList; 
  }

}
