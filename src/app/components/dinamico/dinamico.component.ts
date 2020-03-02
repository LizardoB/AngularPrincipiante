import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.sass']
})
export class DinamicoComponent implements OnInit{

  constructor() { }

  ngOnInit() {
    console.log("");
  }

  isLogged: boolean = false

  nivel: number = 5

}
