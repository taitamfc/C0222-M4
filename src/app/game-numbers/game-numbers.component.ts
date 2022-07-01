import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-numbers',
  templateUrl: './game-numbers.component.html',
  styleUrls: ['./game-numbers.component.css']
})
export class GameNumbersComponent implements OnInit {

  playerName:string = 'Nguyen Van A';
  numbers : number[] = [];
  point: any = 0;
  next: any = 1;
  classes:string[] = [
    'btn-primary','btn-secondary','btn-success'
  ];
  constructor() { }

  ngOnInit(): void {
    for (let index = 1; index <= 100; index++) {
      this.numbers.push(index);
    }
  }

  handleClick( number:any ){
    if( number == this.next ){
      this.point += 1;
      this.next += 1;
      this.numbers = this.shuffle(this.numbers);
    }else{
      this.point  = 0;
      this.next   = 1;
      alert('Game over !')
    }
  }

  setClasses(){
    let randomIndex = Math.floor(Math.random() * 2) + 0;
    let classCss = this.classes[randomIndex];
    return {
      classCss
    }
  }

  shuffle(array:any) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

}
