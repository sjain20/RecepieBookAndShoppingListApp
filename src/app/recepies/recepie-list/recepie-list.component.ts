import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[] = [
    new Recepie("Test Recepie", "Test Description", "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMDUyOTU5LWltYWdlLWt3dndoMGF2LmpwZw.jpg"),
    new Recepie("Test Recepie 2", "Test Description 2", "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJpbmRpYW5fc3dlZXRfZ3VsYWJfamFtdW4taW1hZ2Uta3liZGdjajAuanBn.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
