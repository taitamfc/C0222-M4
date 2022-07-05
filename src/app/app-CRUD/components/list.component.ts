import { Component, OnInit } from '@angular/core';
import { ProductService } from "./../../product.service";
import { Product } from 'src/app/product';

@Component({
  selector: 'app-list',
  templateUrl: '../templates/list.component.html',
})
export class ListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private _ProductService:ProductService
  ) { }

  ngOnInit(): void {
    this.products = this._ProductService.getAll();
    console.log(this.products);
  }

}
