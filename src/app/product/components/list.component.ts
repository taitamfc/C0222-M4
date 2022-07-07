import { Component, OnInit } from '@angular/core';
import { ProductService } from "./../services/product.service";
import { Product } from './../interfaces/product';

@Component({
  selector: 'app-list',
  templateUrl: '../templates/list.component.html',
})
export class ListComponent implements OnInit {

  products: Product[] = [];
  errorMessage:any;

  constructor(
    private _ProductService:ProductService
  ) { }

  ngOnInit(): void {
    // this._ProductService.getAll().subscribe(
    //   //next
    //   products => {
    //     this.products = products;
    //   }, 
    //   //error
    //   error => {
    //     //lỗi xảy ra
    //     console.log(error);
    //   }
    // );

    this._ProductService.getAll().subscribe(
      (products : Product[]) => this.products = products,
      ( errors:any ) => this.errorMessage = errors
    );
  }

}
