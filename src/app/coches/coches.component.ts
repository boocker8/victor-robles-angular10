import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Coche } from "./coche";

@Component({
  selector: 'coches-tag',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {
  public title = "*************** CochesComponent *****************"

  public coche:Coche; //Propiedad
  public coches:Array<Coche>;

  constructor() {
    this.coche = new Coche("","","");
    this.coches = [
      new Coche("Seat","100","Azul"),
      new Coche("Ibiza","200","Blanco"),
      new Coche("Cordoba","500","Rojo")
    ];
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.coche);
    this.coches.push(this.coche);
    this.coche = new Coche("","","");
  }



}


