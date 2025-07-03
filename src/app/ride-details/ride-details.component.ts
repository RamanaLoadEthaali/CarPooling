import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ride-details',
  standalone: false,
  
  templateUrl: './ride-details.component.html',
  styleUrl: './ride-details.component.css'
})
export class RideDetailsComponent implements OnChanges{
  @Input() selectedride !: any;
  @Input() warning !: any;
  @Output() onBooking = new EventEmitter<boolean>;
  isBooked = false;
  canBook = true;
  book(){
    if(!this.warning){
      this.isBooked = true;
    this.selectedride.seatsLeft--;
    this.onBooking.emit(this.isBooked)
    }
  }
  cancel(){
    this.isBooked = false;
    this.selectedride.seatsLeft++
    this.onBooking.emit(this.isBooked)
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changes')
  }
}
