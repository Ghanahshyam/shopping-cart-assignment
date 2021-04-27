
import { ProductCategory } from 'src/app/models/product-category.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeNoImageCategory'
})
export class RemoveNoImageCategoryPipe implements PipeTransform {

  transform(items: ProductCategory[], ...args: unknown[]): unknown {
    return items && items.filter(category => category.imageUrl);
  }

}
