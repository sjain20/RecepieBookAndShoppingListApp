import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recepie } from "./recepie.model";

@Injectable()
export class RecepieService {
    selectedRecepieItem = new EventEmitter<Recepie>();
    recepies: Recepie[] = [
        new Recepie("Burnt Garlic Rice",
            "Test Description",
            "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMDUyOTU5LWltYWdlLWt3dndoMGF2LmpwZw.jpg",
            [new Ingredients('Garlic', '1'), new Ingredients('Rice', '1 Cup'), new Ingredients('Corriander', 'For Garnish')]),
        new Recepie("Gulab Jamun",
            "Test Description 2",
            "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJpbmRpYW5fc3dlZXRfZ3VsYWJfamFtdW4taW1hZ2Uta3liZGdjajAuanBn.jpg",
            [new Ingredients('Ready To Cook Gulab Jamun Floor', '1'), new Ingredients('Oil', 'As Required')])
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecepies() {
        return this.recepies.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredients[]) {
        this.shoppingListService.addIngredientsToList(ingredients);
    }

}