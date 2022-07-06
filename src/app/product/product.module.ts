import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ProductRoutingModule } from "./product-routing.module";
import { ListComponent } from "./components/list.component";
import { AddComponent } from "./components/add.component";
import { EditComponent } from "./components/edit.component";
import { DeleteComponent } from "./components/delete.component";
import { SharedModule } from "./../shared/shared.module";


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductModule { }
