import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from '../../shared/product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  
  // transform(value: string, ...args) {
  //   return value.toLowerCase();
  // }

  transform(value: IProduct[], filterBy: string): IProduct[]{
      filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
      return filterBy ? value.filter((product: IProduct) => product.name.toLocaleLowerCase().indexOf(filterBy) !== -1): value;
  };
}
