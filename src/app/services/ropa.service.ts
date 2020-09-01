import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RopaService {
  constructor() { }

  public coleccionRopa = ['Pantalones Blancos', 'Camiseta Roja'];
  public prenda = "Pantalones Vaqueros";

  public obtenerPrenda(prenda){
    return prenda;
  }

  public addRopa(_prenda:string):Array<string>{
    this.coleccionRopa.push(_prenda);
    return this.getRopa();
  }

  public getRopa():Array<string>{
    return this.coleccionRopa;
  }

public deleteRopa(index:number):Array<string>{
    this.coleccionRopa.splice(index,1);
    return this.getRopa();
  }

}
