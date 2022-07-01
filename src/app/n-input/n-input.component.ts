import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-n-input',
  templateUrl: './n-input.component.html',
  styleUrls: ['./n-input.component.css']
})
export class NInputComponent implements OnInit {

  @Input('in_name') in_name: any;
  @Input('in_product') in_product: any;

  constructor() { }

  ngOnInit(): void {
    console.log( this.in_product )
  }

}
