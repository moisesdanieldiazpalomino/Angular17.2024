import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid} from "uuid";


@Injectable({
  providedIn:'root'
})
export class DbzService{
  public characters:Character[]=[{
    id:uuid(),
    name:'Krillin',
    power:1000
  },{
    id:uuid(),
    name:'Goku',
    power:9500
  },{
    id:uuid(),
    name:'vegeta',
    power:7500
  }];

  onNewCharacter(character:Character):void{

    /*const newCaracter: Character={
      id:uuid(),
      name:character.name,
      power:character.power
    }*/

    const newCaracter:Character={
      id:uuid(), ...character}

    console.log(newCaracter);
    this.characters.push(newCaracter);
  }

  onDeleteCharacterById(id:string):void{
    this.characters=this.characters.filter(character =>character.id!==id);
  }
}
