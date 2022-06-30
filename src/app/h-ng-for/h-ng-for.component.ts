import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-ng-for',
  templateUrl: './h-ng-for.component.html',
  styleUrls: ['./h-ng-for.component.css']
})
export class HNgForComponent implements OnInit {

  products : any[] = [
    {
      id: 1,
      name: 'San pham A'
    },
    {
      id: 2,
      name: 'San pham B'
    }
  ];

  numbers : Number[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let index = 1; index <= 100; index++) {
      this.numbers.push(index);
    }
  }

}
