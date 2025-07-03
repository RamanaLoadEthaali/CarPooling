import { Injectable } from '@angular/core';
import { Ride } from './book-ride/rides';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  ride = new Ride();
  getRides(): Observable<Ride[]>{
    return this.http.get<Ride[]>('./assets/rides/rides.json').pipe(
      catchError(this.handleError)
    )
  }

  // addRide(ride: Ride): Observable<any> {
  //   const options = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.post('./assets/rides/rides.json', ride, { headers: options }).pipe(
  //     catchError(this.handleError));
  // }
  // addRides(r: Ride): any{
  //   return this.http.post('./assets/rides/rides.json', r)
  // }

  private handleError(err: HttpErrorResponse){
      console.log(err);
      return throwError(err.error || 'Server error')
    }
}
