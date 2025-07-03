import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'PoolCarZ';
  constructor(private router: Router){

  }
  ngOnInit(): void {
    localStorage.removeItem('offeredRide');
    localStorage.removeItem('addedRide');
    this.router.navigate(['/'])
  }
}
