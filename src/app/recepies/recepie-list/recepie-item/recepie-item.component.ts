import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recepie } from '../../recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input('recepieItem') recepieItem: Recepie
  @Output('loadRecepieDetails') loadRecepieDetails = new EventEmitter<Recepie>();
  constructor() { }

  ngOnInit(): void {
  }

  recepieItemClicked(recepieItem:Recepie){
    this.loadRecepieDetails.emit(recepieItem);
  }

}
