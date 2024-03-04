import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from '../app/product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DetailPageComponent } from '../app/product-list/detail-page/detail-page.component';

const routes: Routes = [
  {path: "product-form", component: ProductFormComponent},
  {path: "product-list", component: ProductListComponent},
  {path: "product-list/:id", component: DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
