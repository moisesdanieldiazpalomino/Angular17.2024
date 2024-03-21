import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public defaultHeroNames:string[]=['Spiderman','Ironman','Thor','Captain america'];
  public heroNames:string[]=[...this.defaultHeroNames];
  public deletedHero?:string;

  removeLastHero():void{
     this.deletedHero=this.heroNames.pop();
     console.log(this.deletedHero);
     console.log(this.defaultHeroNames);
  }

  restarHeroes():void{
    this.heroNames=this.defaultHeroNames.slice();
    console.log(this.defaultHeroNames);
  }
}
