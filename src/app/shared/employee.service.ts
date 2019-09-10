import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  list : Employee[];
  isLoaded : boolean;

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

  postEmployee( emp : Employee ){
    return this.http.post( this.rootURL, emp, this.header );
  }

  putEmployee( url, formData : Employee ){
    return this.http.put( url, formData, this.header );
  }

  // getURL( url ){
  //   return this.http.get( url, this.header );
  // }

  generateList()
  {       
    this.isLoaded = false;

    this.getEmployees()
      .subscribe(
        res => {
          this.list = res as Employee[];
          this.isLoaded = true;
        }        
      );
  }

}