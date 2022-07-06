import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { ListComponent } from "./components/list.component";
import { AddComponent } from "./components/add.component";
import { EditComponent } from "./components/edit.component";
import { DeleteComponent } from "./components/delete.component";

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'delete/:id', component: DeleteComponent },
];

// configures NgModule imports and exports
@NgModule({
  
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProductRoutingModule { }