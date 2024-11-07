import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformData'
})
export class TransformDataPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value*value;
  }

}
