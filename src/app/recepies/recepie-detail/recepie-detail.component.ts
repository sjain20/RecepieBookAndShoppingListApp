import { Component, Input } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent {
  @Input('selectedRecepie') selectedRecepie: Recepie
  constructor(private recepieService: RecepieService) { }

  onAddToShoppingListClick(ingredientList: Ingredients[]) {
    this.recepieService.addIngredientsToShoppingList(ingredientList);
  }
}
