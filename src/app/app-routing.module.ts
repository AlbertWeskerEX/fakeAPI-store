import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsIdComponent } from './products-id/products-id.component';
import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'products-id', component: ProductsIdComponent },
  { path: 'products-all', component: ProductsComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
