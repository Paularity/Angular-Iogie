import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // formData : Employee;
  // list : Employee[];

  // readonly rootURL = "https://jsonplaceholder.typicode.com/users";
  readonly rootURL = "https://ovk-payroll-rest.azurewebsites.net/api/organization/employee/";  
  token = '783741f795a33256dabd06d85069763d7e33643c';
  header = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Token ${this.token}`,
      'Access-Control-Allow-Headers': 'X-CSRF-Token, Content-Type'
    })
  };

  constructor( private http : HttpClient ) { }
  
  getEmployees(){
    return this.http.get( this.rootURL, this.header );
  }

  deleteEmployee( url ){
    return this.http.delete( url, this.header );
  }

  // getURL( url ){
  //   return this.http.get( url, this.header );
  // }

  // generateList(){
  //   this.http.get( this.rootURL, this.header )
  //   .subscribe( 
  //     res => this.list = res as Employee[] ,
  //     error => console.error("GET REQUEST FAILED:", error),      
  //   );    
  // }

}