import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFormatea'
})
export class PipeFormateaPipe implements PipeTransform {

  transform(value: any): google.maps.LatLngLiteral  {

    return {lat:value.lat,lng:value.lon} ;
  }


}
