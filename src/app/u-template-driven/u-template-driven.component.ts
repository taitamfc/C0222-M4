import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-u-template-driven',
  templateUrl: './u-template-driven.component.html',
  styleUrls: ['./u-template-driven.component.css']
})
export class UTemplateDrivenComponent implements OnInit {

  full_name:String = 'Nguyeen';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit( value:any ){
    console.log( value )
  }

}
