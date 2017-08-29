import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { ProductDetailPage } from '../product-detail/product-detail';
import { ProductsServiceProvider} from '../../providers/products-service/products-service';
import { IProduct } from '../../shared/product';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  products: IProduct[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _productService: ProductsServiceProvider,
              private loadingController: LoadingController) {
  }

  searchProducts(query: string){
    let loader = this.loadingController.create({
      content: 'Getting Products'
    });

    loader.present().then(() => {
      this._productService.getProductsQuery(query).subscribe(data => {this.products = data; loader.dismiss();}, error => this.errorMessage = <any> error);
    });
  }

   toProductDetail(event, product:IProduct){
    this.navCtrl.push(ProductDetailPage, product);
  }

}
