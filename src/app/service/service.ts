import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/products.model';
import { oneProductsURL, productsURL } from '../../environments/environment';

@Injectable()
export class Service {
  constructor(private http: HttpClient) {

  }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(productsURL)
  }

  getOneProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: { limit: 1}
      })
    })
  }
}

