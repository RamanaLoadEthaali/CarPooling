import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BookRideComponent } from '../book-ride/book-ride.component';
import { Ride } from '../book-ride/rides';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
// import fs from 'fs';
import {saveAs} from 'file-saver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-ride',
  standalone: false,
  templateUrl: './offer-ride.component.html',
  styleUrl: './offer-ride.component.css'
})
export class OfferRideComponent implements OnInit{
  // @ViewChild(BookRideComponent) bookRideRef!: BookRideComponent;
  @Output() addedRide = new EventEmitter<boolean>;
  registerForm !: FormGroup;
  rideAdded = false;
  ridesRef !: Ride[];
  rideObject !: Ride;
  constructor(private restService: RestService,private router: Router ,private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.restService.getRides().subscribe((rides)=>{
      this.ridesRef = rides;
      this.rideObject={id:this.ridesRef[this.ridesRef.length-1].id+1,offerId:'o'+(this.ridesRef[this.ridesRef.length-1].id+1),name:'',car:'',seatsLeft:0,pickUp:'',destination:''}
      console.log('rides:' , rides, '\nthis.ridesRef:', this.ridesRef, '\nthis.rideObject:', this.rideObject)
    })
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      start: ['', [Validators.required, Validators.maxLength(10)]],
      end: ['', [Validators.required, Validators.maxLength(10)]],
      Car: ['', [Validators.required, Validators.maxLength(10)]],
      seatsLeft: [0, [Validators.required,Validators.min(1) , Validators.max(7)]]
    })
    console.log("ridesRef:",this.ridesRef)
  };
  
  // ridesRef = rides
  // rideObject={id:this.ridesRef[this.ridesRef.length-1].id+1,offerId:'o'+(this.ridesRef[this.ridesRef.length-1].id+1),name:'',car:'',seatsLeft:0,pickUp:'',destination:''}
  // addRideToRides(r: Ride){
    // import fs from 'fs';

// // Load the existing JSON data
// const filePath = './assets/rides/rides.json';
// const rawData = fs.readFileSync(filePath, 'utf8');
// const data = JSON.parse(rawData);

// // Add a new object to the existing data
// // data.newObject = {
// //   key: 'value',
// //   anotherKey: 'anotherValue'
// // };
// data.push(r);

// // Write the updated data back to the file
// const newData = JSON.stringify(data, null, 2); // Pretty print with 2 spaces indentation
// fs.writeFileSync(filePath, newData);
  // }

    // }

    logout(){
      // this.isAuthenticated = false;
      this.router.navigate(['/login'])
    }

  addRide(r: Ride){
    this.restService.getRides().subscribe(data => {
      this.ridesRef = data;
      // Modify the object here
      this.ridesRef.push(r);
  
      // Convert to JSON string
      const jsonStr = JSON.stringify(this.ridesRef, null, 2);
  
      // Convert to Blob
      const blob = new Blob([jsonStr], { type: 'application/json' });
  
      // Save as file
      // saveAs(blob, 'data.json');}
      localStorage.setItem('addedRide',jsonStr)
    }
    )
  }
  
  

  onSubmit(rideObj:any){
    console.log('ridesRef in onSubmit:',this.ridesRef)
    rideObj.name=this.registerForm.controls['name'].value;
    rideObj.car=this.registerForm.controls['Car'].value;
    rideObj.seatsLeft=this.registerForm.controls['seatsLeft'].value;
    rideObj.pickUp=this.registerForm.controls['start'].value;
    rideObj.destination=this.registerForm.controls['end'].value;
    this.addRide(rideObj);
    // this.addRideToRides(rideObj);
    // this.restService.addRide(rideObj);
    // this.ridesRef.push(rideObj)
    // this.restService.getRides().subscribe((rides)=>{
    //   rides.push(rideObj);
    //   console.log('puss:',rides)
    // })
    localStorage.setItem('offeredRide', JSON.stringify(rideObj))
    console.log('ridesRef in onSubmit after:',this.ridesRef)
    this.rideAdded = true
  }

  goBack(){
    this.addedRide.emit(this.rideAdded);
    console.log('rideAdded',this.rideAdded)
    this.router.navigate(['/book-ride'])
  }
}
