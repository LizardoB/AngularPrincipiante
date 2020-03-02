import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repaso-dinamico',
  templateUrl: './repaso-dinamico.component.html',
  styleUrls: ['./repaso-dinamico.component.sass']
})
export class RepasoDinamicoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isLogged: boolean = false

  nivel: number = 5

}
