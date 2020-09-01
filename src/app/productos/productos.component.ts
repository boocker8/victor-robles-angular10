import { Component, OnInit } from '@angular/core';
//  importar HttpClient(para hacer las peticiones al API REST por AJAX) y
//           HttpHeaders(para establecer cabeceras en las peticiones):
import {Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from "../services/productos.service";

@Component({
  selector: 'productos-tag',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductoService]
})
export class ProductosComponent implements OnInit {

  title = ' **************** ContactoComponent ****************';

  public productos:any;

  constructor(
    public _productoService:ProductoService
  ) {  }

  ngOnInit(): void { console.log("** Invocando a _productoService.getProductos() **");
  this._productoService.getProductos().subscribe(
    result => {
      if(result.status != 200){
        console.log("Error: ProductosComponent");
        console.log(result.status);

      }else{
        this.productos = result.body;
        console.log(result);
        console.log(result.status);
        console.log(this.productos);
      }

    },
    error => {
        console.log(<any>error);
    }
);  }


}
