import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { ListComponent } from "./app-CRUD/components/list.component";
import { AddComponent } from "./app-CRUD/components/add.component";
import { EditComponent } from "./app-CRUD/components/edit.component";
import { DeleteComponent } from "./app-CRUD/components/delete.component";

const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'add', component: AddComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'delete/:id', component: DeleteComponent },
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }