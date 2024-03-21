import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string='Iroman';
  public age:number=45;

  get capitalizadName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name='Superman';
  }

  changeAge():void{
    this.age=35;
  }

  resetForm():void{
    this.name='Ironman';
    this.age=45;
  }

}
