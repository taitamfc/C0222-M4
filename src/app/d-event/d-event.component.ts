import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-event',
  templateUrl: './d-event.component.html',
  styleUrls: ['./d-event.component.css']
})
export class DEventComponent implements OnInit {

  count:any = 0;//1
  name:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() :void{
    this.count++;
  }

  handleChange( event:any ): void {
    var name = event.target.value;
    this.name = name;
  }

  handleChange2( value:any ): void {
    this.name = value;
  }

}
