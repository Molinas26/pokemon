import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultpoke = [];
    for (const p of value) {
      if (p.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultpoke.push(p);        
      }
    }
    return resultpoke;
  }

}
