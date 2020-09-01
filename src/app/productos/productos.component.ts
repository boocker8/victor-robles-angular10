import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.getServiceProductos("1");

  }

  /**
   * name
   */
  public getServiceProductos(param:string) {
    this._productoService.getAPIServiceProductos(param).subscribe(
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
      });
  }


}
