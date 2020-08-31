import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector-error',
  templateUrl: 'error.component.html'
})

export class ErrorComponent implements OnInit {

  title = ' **************** ErrorComponent ****************';

  constructor() { }

  ngOnInit() { }
}
