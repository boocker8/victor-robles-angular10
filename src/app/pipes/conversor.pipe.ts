import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})

export class ConversorPipe implements PipeTransform {
  transform(value, por) {
    let _value = parseInt(value);
    let _por = parseInt(por);

    let result = "La multiplicacion: " + "de " + _value + " por " + _por + " = " + (_value*_por);

    return result;
  }
}
