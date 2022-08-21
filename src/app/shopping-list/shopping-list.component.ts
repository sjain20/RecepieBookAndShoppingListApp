import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[] = [
    new Ingredients("Rice", "1 Bowl"),
    new Ingredients("Garlic Paste", "1 Tsp"),
    new Ingredients("Pudina", "As Required")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
