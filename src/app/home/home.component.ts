import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home-tag',
  templateUrl: './home.component.html',
  providers: [RopaService]
})

export class HomeComponent implements OnInit {

  title = ' **************** HomeComponent **************** ';
  public listadoRopa:Array<String>;
  public prenda_a_guardar:string;
  public fecha;

  constructor(private _ropaService: RopaService) {
    this.fecha = new Date(2020,1,6);
  }

  ngOnInit() {
   this.listadoRopa = this._ropaService.getRopa();
    console.log(this.listadoRopa);
   }

   public guardarPrenda(){
     this._ropaService.addRopa(this.prenda_a_guardar);
     this.prenda_a_guardar = null;
   }

   public eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
   }

}
