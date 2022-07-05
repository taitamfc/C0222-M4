import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from "../../product";
import { ProductService } from "../../product.service";
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: '../templates/edit.component.html',
})
export class EditComponent implements OnInit {

  product!:Product;
  id:any;
  formProfile !:FormGroup;

  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this.product = this._ProductService.find(id);

      this.formProfile = new FormGroup({
        'name' : new FormControl(this.product.name,[
          Validators.required,
          Validators.minLength(3)
        ]),
        'price' : new FormControl(this.product.price,[
          Validators.required
        ])
      });

    })
  }

  onSubmit(){
    const product:Product = {
      name: this.formProfile.value.name,
      price: this.formProfile.value.price,
    }
    this._ProductService.update( this.id,product );

    this._Router.navigate(['/list']);

  }

}
