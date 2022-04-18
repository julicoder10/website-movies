import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  buscadorActivado:boolean = false;
  navActivado:boolean = false;

  
  constructor() { }

  ngOnInit(): void {
  }

  activarBuscador(){
    this.buscadorActivado = !this.buscadorActivado;
  }

  activarNav(){
    this.navActivado = !this.navActivado;
  }
}
