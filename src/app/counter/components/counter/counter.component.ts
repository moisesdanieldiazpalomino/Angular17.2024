import { Component } from "@angular/core";


@Component({
  selector:'app-counter',
  template:`
    <h3> Counter: {{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset(10)">Reset</button>
    <button (click)="decrementBy(1)">-1</button>

  `,
})
export class CounterComponent
{

  
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
