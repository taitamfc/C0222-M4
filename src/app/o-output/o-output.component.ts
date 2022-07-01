import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-o-output',
  templateUrl: './o-output.component.html',
  styleUrls: ['./o-output.component.css']
})
export class OOutputComponent implements OnInit {

  @Output('answerRequest') answerRequest = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.answerRequest.emit(123);
  }

}
