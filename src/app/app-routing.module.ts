import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsIdComponent } from './products-id/products-id.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'products/:id', component: ProductsIdComponent },
  { path: 'products', component: ProductsComponent }
];
// 'products/:id'
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
