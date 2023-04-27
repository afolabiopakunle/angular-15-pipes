import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, length?: any): any {
    if(length > 0) {
      return value.substr(0, length) + '...';
    }
    return value.substr(0, 12) + '...';
  }

}