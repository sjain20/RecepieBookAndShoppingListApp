import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewLoaded = 'recepie';
  title = 'RecepieBookAndShoppingListApp';

  setNavigatedView(view: string) {
    this.viewLoaded = view;
  }
}
