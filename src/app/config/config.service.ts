import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IProduct } from '../models/products.model';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {

  }
  getData(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/products')
  }
}

