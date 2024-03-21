import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title:string = 'Hola Mundo';

  public counter:number=10;

  increaseBy(counter:number):void{

    this.counter +=counter;
  }

  decrementBy(counter:number):void{

    this.counter -=counter;
  }

  reset(counter:number):void{
    this.counter=counter;
  }
}
