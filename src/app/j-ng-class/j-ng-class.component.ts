import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-j-ng-class',
  templateUrl: './j-ng-class.component.html',
  styleUrls: ['./j-ng-class.component.css']
})
export class JNgClassComponent implements OnInit {

  isPrimary: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    return {
      'btn-primary' : true,
      'btn-info' : true,
      'text-danger': true
    }
  }

}
