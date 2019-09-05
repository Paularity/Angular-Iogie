import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  list : Employee[];

  readonly rootURL = "https://ovk-payroll-rest.azurewebsites.net/api/organization/employee";
  // readonly rootURL = 'https://24b60409-e2aa-4bc8-834a-d2ba114cea42.mock.pstmn.io';
  token = '783741f795a33256dabd06d85069763d7e33643c';
  header = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Token ${this.token}`
    })
  };

  constructor( private http : HttpClient ) { }
  
  generateList(){
    this.http.get( this.rootURL, this.header )
    .toPromise()
    .then( res => this.list = res as Employee[] )
    .catch( error => console.error( 'Authorization failed: ' + error.message ) );
  }

}