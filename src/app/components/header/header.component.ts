import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { 
    console.log("");
  }

  ngOnInit() {
    console.log("");
  }

  nombre = "Lizardo"
  nombreFuncion = "Aylin"

  cambiarNombre(){
    this.nombreFuncion = "Lucia"
  }

  //array

  arr = [1,2,3,4,5,6,7,8,9,10]

  agregarNumero(){
    this.arr.push(Math.random())
  }
}
