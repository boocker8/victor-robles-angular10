import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'selector-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  title = ' **************** ContactoComponent ****************';
  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) {

  }

  ngOnInit(): void {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['parametro'];
    });
  }

  public redirigir(){
    this._router.navigate(['/con','Jorge Rodriguez S']);
  }

}
