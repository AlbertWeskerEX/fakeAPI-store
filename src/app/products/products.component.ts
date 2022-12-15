import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../service/service';
import { IProduct } from '../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private _localService: Service) {
  }
  products$: Observable<IProduct[]>

  arrayStore:any = [];
  ngOnInit(): void {
    this.products$ = this._localService.getProducts()
}

}
