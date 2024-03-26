import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output()
  onDeleteID:EventEmitter<string>= new EventEmitter();

  @Input()
  public character: Character[]=[{
    name:'Trunk',
    power:10
  }]


  onDeleteCharacterById(id?:string):void{
    if(!id)return;
    console.log(id);
    this.onDeleteID.emit(id);
  }



  constructor() { }

  ngOnInit() {
  }

}
