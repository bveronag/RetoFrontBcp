import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFormatea'
})
export class PipeFormateaPipe implements PipeTransform {

  transform(value: any): any  {
    return JSON.stringify ({lat:value.lat,lng:value.lon} );
  }


}
