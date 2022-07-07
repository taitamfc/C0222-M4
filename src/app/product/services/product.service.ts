import { Injectable } from '@angular/core';
import { Product } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from './../../../environments/environment';
const API_URL = `${environment.api_url}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http:HttpClient
  ) { }

  getAll():Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/students');
  }
  //lay 1 item theo id
  find( id:any ):void {
    
  }

  //store
  store( product:Product ):void{
    
  }

  //update
  update( id:number, product:Product ):void{
    
  }

  //destroy
  destroy( id:number):void{
    
  }

  //search
  search( q:any ):void {
    
  }
}
