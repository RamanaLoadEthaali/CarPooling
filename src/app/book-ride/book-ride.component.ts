import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Ride} from './rides';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-ride',
  standalone: false,
  templateUrl: './book-ride.component.html',
  styleUrl: './book-ride.component.css'
})
export class BookRideComponent implements OnInit, OnChanges, OnDestroy{
  @Output() onOfferingRide = new EventEmitter<boolean>;
  constructor(private restService: RestService, private router: Router){}
  rides!: Ride[];
  ngOnDestroy(): void {
    localStorage.removeItem('offeredRide');
    localStorage.removeItem('addedRide');
  }
  ngOnInit(): void {
    this.restService.getRides().subscribe((rides)=>{
      this.rides = rides
      const offrdride = localStorage.getItem('offeredRide');
    if(offrdride){
      this.rides.push(JSON.parse(offrdride));
    }

    })

  };
  ngOnChanges(): void {
    
  }
  warnMsg = false;//to display cannot selects your own ride
  offeringRide = false;
  lg = 'lightgreen'
  mycolor='lightblue'
  isTable=false;
  show = false;
  selectedR !: any;
  logout(){
    // this.isAuthenticated = false;
    this.router.navigate(['/login'])
  }
  offeringARide(){
    this.offeringRide = !this.offeringRide;
    this.onOfferingRide.emit(this.offeringRide);
    this.router.navigate(['/offer-ride'])
  }
  bookedRide(isBooked:boolean){
    this.isTable = !isBooked;
    // console.log('isBooked in parent component', this.isTable , '&' , isBooked)
  }
  rideDetail(r:any){
    this.selectedR=r;
    const offrdride = localStorage.getItem('offeredRide');
    if(offrdride){
      if(this.selectedR.id === JSON.parse(offrdride).id){
        this.warnMsg = true;
        // return
      }
      else{
        
    this.warnMsg = false
      }
    }
    this.show = !this.show;
    // console.log('selectedR:',this.selectedR)
  }
  table(){
    this.filter = '';
    this.isTable=!this.isTable;
  }
  filter='';
  toOffice(){
    this.filter='tooffice';
    if(!this.isTable){
    this.isTable=!this.isTable;
  }
  };
  fromOffice(){
    this.filter='fromoffice';
    if(!this.isTable){
      this.isTable=!this.isTable;
    }
  };
  Others(){
    this.filter='others'
    if(!this.isTable){
      this.isTable=!this.isTable;
    }
  }
  // rides = rs;
}
