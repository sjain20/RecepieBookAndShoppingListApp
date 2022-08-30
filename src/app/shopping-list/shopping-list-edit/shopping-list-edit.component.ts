import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('quantityInput') quantityInput: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  onAddItem() {
    this.shoppingListService.addIngredientToList(new Ingredients(this.nameInput.nativeElement.value, this.quantityInput.nativeElement.value));
  }
}
