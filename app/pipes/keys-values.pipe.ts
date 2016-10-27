import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
  name: 'keysValues'
})

export class KeysValuesPipe implements PipeTransform {
  transform(object: any) {
    let values = [];
    for (let key in object) {
      values.push(object[key]);
    }
    return values;
  }
}