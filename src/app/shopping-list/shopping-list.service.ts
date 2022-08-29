import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService {
    ingredients: Ingredients[] = []
    ingredientsUpdated = new EventEmitter<Ingredients[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredientToList(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
        this.ingredientsUpdated.emit(this.ingredients);
    }

    addIngredientsToList(ingredients: Ingredients[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsUpdated.emit(this.ingredients);
    }
}