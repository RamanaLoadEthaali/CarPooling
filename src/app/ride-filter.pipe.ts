import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rideFilter',
  standalone: false
})
export class RideFilterPipe implements PipeTransform {

  transform(value:any[] ,args: string): any[]{
      let retarr : any[] = [];
      console.log('Before', value);
      value.forEach((item)=>{
      if (args === ''){ 
        console.log('no filter')
        retarr.push(item)
      }
      else if(args === 'tooffice'){
        if (item.destination === 'Office'){
          retarr.push(item);
        };
      }
      else if(args === 'fromoffice'){
        if (item.pickUp === 'Office'){
          retarr.push(item);
        }
      }
      else if(args === 'others'){
        if ( (item.pickUp !== 'Office') && (item.destination !== 'Office') ){
          retarr.push(item);
        };
      }
      });
      console.log('After',value,'args:',args,'retval',retarr)
      return retarr;
  }

}
