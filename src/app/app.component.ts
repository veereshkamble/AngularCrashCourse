import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Veeresh';

  constructor() {
    console.log(7);
    this.changeName('Ronaldo'); 
  }

  changeName(name:string):void {
    this.name = name;
  }
}
