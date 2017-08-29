import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduct } from '../../shared/product';

@Injectable()
export class ProductsServiceProvider {
  private _urlProducts: string = 'http://localhost:8080/productsTest/productsJson';

  constructor(private http: Http) {
    console.log('Hello ProductsServiceProvider Provider');
  }

  getProducts(): Observable<IProduct[]>{
    return this.http.get(this._urlProducts)
    .map((response: Response) => <IProduct[]> response.json())
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  getProductsQuery(query: string): Observable<IProduct[]>{
    return this.http.get(this._urlProducts + '?query=' + query)
    .map((response: Response) => <IProduct[]> response.json())
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(error: Response) {
      return Observable.throw(error.json().error || 'Server error');
  }

}
