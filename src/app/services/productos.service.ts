
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';


@Injectable({providedIn: 'root'})
export class ProductoService {

  public url:string;

  constructor(
    private httpClient: HttpClient
    ) {
    this.url = "https://jsonplaceholder.typicode.com/posts"
  }
  /**
   * name
   */
    getProductos(): Observable<any>{
      return this.httpClient.get(this.url);

  }

}
