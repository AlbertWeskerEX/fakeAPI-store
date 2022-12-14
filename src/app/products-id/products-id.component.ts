import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../models/products.model';
import { product as data } from '../data/product';
import { ConfigService } from '../config/config.service';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-products-id',
  templateUrl: './products-id.component.html',
  styleUrls: ['./products-id.component.css']
})
export class ProductsIdComponent {
    constructor(private _localService: ConfigService) {
    }
    products$: Observable<IProduct[]>
  
    arrayStore:any = [];
    ngOnInit(): void {
      this.products$ = this._localService.getData()
    //   this._localService.getData().subscribe((rez) => {
    //     this.arrayStore = rez;
    // })
  }
}
