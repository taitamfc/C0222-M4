import { Injectable } from '@angular/core';
import { Product } from './../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
        name:'Iphone 1',
        price:20000
    },
    {
      name:'Iphone 2',
      price:40000
    }
  ];

  constructor() { }

  getAll(): Product[]{
    return this.products;
  }
  //lay 1 item theo id
  find( id:any ):Product {
    return this.products[id];
  }

  //store
  store( product:Product ):void{
    this.products.push(product);
  }

  //update
  update( id:number, product:Product ):void{
    this.products[id] = product;
  }

  //destroy
  destroy( id:number):void{
    this.products.splice(id,1);
  }

  //search
  search( q:any ):Product[] {
    let results:Product[] = [];
    for( let product of this.products ){
      if(product.name == q){
        results.push(product);
      }
    }
    return results;
  }
}
