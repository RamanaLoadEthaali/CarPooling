// export let rides:any[] = [{id:1,offerId:'o1',name:'n1',car:'c1',seatsLeft:3,pickUp:'Vanrose Junction',destination:'Office'},
//     {id:2,offerId:'o2',name:'n2',car:'c2',seatsLeft:2,pickUp:'PTP',destination:'Office'},
//     {id:3,offerId:'o3',name:'n3',car:'c3',seatsLeft:7,pickUp:'Office',destination:'East-Fort'},
//     {id:4,offerId:'o4',name:'n4',car:'c4',seatsLeft:5,pickUp:'Office',destination:'Central Mall'}
//   ]
export class Ride{
  id: number = 0;
  offerId: string = '';
  name: string = '';
  car: string = '';
  seatsLeft: number = 0;
  pickUp: string = '';
  destination: string = '';
}