import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, argumentType: string): any {
    if(!value)
    {
      return '';
    }
    switch(argumentType)
    {
      case 'km':
        return value*10;
      case 'cm':
        return value*100;
      default:
        return 'Not Default Input';
    }
    
    return (value * 0.621371);
  }

}
