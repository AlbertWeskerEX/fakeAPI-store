import { Component, OnInit, Input } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { IProduct } from '../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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
