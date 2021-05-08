import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { OffersCarouselComponent } from './components/offers-carousel/offers-carousel.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryOverviewCardComponent } from './components/category-overview-card/category-overview-card.component';
import { RemoveNoImageCategoryPipe } from './pipes/remove-no-image-category/remove-no-image-category.pipe';
import { ProductDetailsCardComponent } from './components/product-details-card/product-details-card.component';
import { FilterByCategoryPipe } from './pipes/filter-by-category/filter-by-category.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    OffersCarouselComponent,
    CategoryOverviewCardComponent,
    RemoveNoImageCategoryPipe,
    ProductDetailsCardComponent,
    FilterByCategoryPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
