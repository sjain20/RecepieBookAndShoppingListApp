import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('quantityInput') quantityInput: ElementRef;
  @Output('onAddIngredientClick') onAddIngredientClick = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    this.onAddIngredientClick.emit(new Ingredients(this.nameInput.nativeElement.value, this.quantityInput.nativeElement.value));
  }
}
