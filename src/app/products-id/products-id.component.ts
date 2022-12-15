import { Component } from '@angular/core';
import { IProduct } from '../models/products.model';
import { Service } from '../service/service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-id',
  templateUrl: './products-id.component.html',
  styleUrls: ['./products-id.component.css']
})
export class ProductsIdComponent {
    constructor(private _localService: Service) {
    }
    products$: Observable<IProduct[]>

    arrayStore:any = [];    
    ngOnInit(): void {
      this.products$ = this._localService.getOneProducts()
  }

}
