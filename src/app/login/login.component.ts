import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Login} from './Login'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { OfferRideComponent } from '../offer-ride/offer-ride.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  // @ViewChild(OfferRideComponent) offrRideComponentRef !: OfferRideComponent;
  // @ViewChild('goback') goback : ElementRef;
  constructor(private loginService: LoginService,private formBuilder: FormBuilder, private router: Router){
    // this.offrRideComponentRef;
  }
  ngOnInit(){
    // this.goback
    this.loginService.getUsers().subscribe((users)=>{this.users = users})
    this.loginForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
  }
  loginForm !: FormGroup;
  login = new Login();
  // users = this.login.users;
  users !: any;
  isAuthenticated = false;
  username !: '';//ngmodel is used and the username and password values are updated using two way data binding
  password !: '';
  credentialsInvalid !: boolean;
  offeringRide = false;
  bookingRide = true;
  offeredARide(offr:boolean){
    this.offeringRide=offr;
    this.bookingRide = !this.bookingRide;
    console.log(this.offeringRide,this.bookingRide,this.isAuthenticated)
  }
  // logout(){
  //   this.isAuthenticated = false;
  // }
  onSubmit(){
    // if(username==='admin'&&password==='admin'){
    //   this.isAuthenticated = true
    // }
    // const username = this.login.username;
    // const password = this.login.password;
    for(let usr of this.users){
      if(this.username===usr.username && this.password===usr.password){
        this.isAuthenticated = true;
        this.credentialsInvalid = false;
        this.router.navigate(['/book-ride'])
      }
      else{
        this.credentialsInvalid = true;
      }
    }
  }

  onAddingRide(e:boolean){
    if(e){
      this.bookingRide = !this.bookingRide;
      this.offeringRide = !this.offeringRide
      console.log(this.bookingRide,this.offeringRide)
    }
  }
}
