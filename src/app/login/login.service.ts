import { Injectable } from '@angular/core';
import { Login } from './Login';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login = new Login();
  getUsers(): Observable<Login[]>{
    return this.http.get<Login[]>('./assets/users/users.json').pipe(
      catchError(this.handleError));
  } 

  private handleError(err: HttpErrorResponse){
    console.log(err);
    return throwError(err.error || 'Server error')
  }

}
