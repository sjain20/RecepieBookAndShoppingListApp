import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output('navigationEvent') navigationEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  setView(view: string) {
    this.navigationEvent.emit(view);
  }
}
