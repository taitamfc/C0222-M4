import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vndformat'
})
export class VndformatPipe implements PipeTransform {

  transform(value: any): any {
    return value.toFixed(2);
  }

}
