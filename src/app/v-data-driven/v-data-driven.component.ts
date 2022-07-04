import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-v-data-driven',
  templateUrl: './v-data-driven.component.html',
  styleUrls: ['./v-data-driven.component.css']
})
export class VDataDrivenComponent implements OnInit {
  formProfile !:FormGroup;
  constructor() { }

  ngOnInit(): void {
    let userProfile = {
      'full_name' : 'Nguyen Van A',
      'email' : 't@t.t'
    }
    this.formProfile = new FormGroup({
      'full_name' : new FormControl(userProfile.full_name,[
        Validators.required,
        Validators.minLength(3)
      ]),
      'email' : new FormControl('',[
        Validators.required
      ])
    });
  }

  onSubmit(){
    //if( this.formProfile.valid ){
      console.log( this.formProfile.value );
    //}
  }

}
