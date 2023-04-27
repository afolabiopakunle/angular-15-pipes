import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, name?: any): any {
    return value.sort((a: any, b: any) => (a.name < b.name ) ? -1 : 1)
    
  }

}