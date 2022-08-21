import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recepieListClicked = false;
  shoppingListClicked = false;
  title = 'RecepieBookAndShoppingListApp';

  setNavigatedView(view: string) {
    switch (view) {
      case "recepie":
        this.recepieListClicked = true;
        this.shoppingListClicked = false;
        break;
      case "shopping-list":
        this.recepieListClicked = false;
        this.shoppingListClicked = true;
        break;
      default:
        this.recepieListClicked = false;
        this.shoppingListClicked = false;
        break;
    }
  }
}
