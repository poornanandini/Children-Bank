import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
    constructor(private http:HttpClient) {}
      apiurl="http://localhost:3000/users";
      RegisterUser(inputdata:any){
      return this.http.post(this.apiurl,inputdata);
    }
}