import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-g-ng-if',
  templateUrl: './g-ng-if.component.html',
  styleUrls: ['./g-ng-if.component.css']
})
export class GNgIfComponent implements OnInit {

  show:boolean = true;
  age:number = 17;

  constructor() { }

  ngOnInit(): void {
  }

}
