import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from "../../product";
import { ProductService } from "../../product.service";

@Component({
  selector: 'app-add',
  templateUrl: '../templates/add.component.html',
})
export class AddComponent implements OnInit {

  constructor(
    private _ProductService:ProductService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    const product:Product = {
      name:'Nokia',
      price:45000
    }
    this._ProductService.store(product);
    
    //chuyen huong ve list
    this._Router.navigate(['/list']);
  }

}
