import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'C0222';
  name:String = 'Nguyễn Văn A';
  age:Number = 18;
  link:String = 'https://github.com';

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

  appComponentAnswer( event:any ):void {
    alert( event );
  }


}


/*
VUE COMPONENT
  - template: HTML
  - css: CSS
  - script: SCRIPT
*/