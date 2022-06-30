import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-k-ng-style',
  templateUrl: './k-ng-style.component.html',
  styleUrls: ['./k-ng-style.component.css']
})
export class KNgStyleComponent implements OnInit {

 

  constructor() { }

  ngOnInit(): void {
  }

  setStyles(){
    return {
      'width' : '200px',
      'backgroundColor' : 'red',
      'height': '100px'
    }
  }

}
