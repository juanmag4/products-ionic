import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';
import { SearchPage } from '../pages/search/search';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { ProductFilterPipe} from '../pipes/product-filter/product-filter';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductsServiceProvider } from '../providers/products-service/products-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductsPage, 
    ProductDetailPage,
    SearchPage,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductDetailPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductsServiceProvider
  ]
})
export class AppModule {}
