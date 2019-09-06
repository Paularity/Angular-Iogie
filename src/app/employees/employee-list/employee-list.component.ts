import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  isLoaded : boolean;
  list : Employee[];

  constructor( private service : EmployeeService ) { }

  ngOnInit() {        

    //set to default value if no data is loaded
    this.isLoaded = false;     
    this.generateList();
  }

  onDelete( url )
  {
    this.isLoaded = false;
    this.service.deleteEmployee( url )
      .subscribe(
        () => {          
          this.generateList();          
        },
        complete => {
          this.isLoaded = true;
          console.log(complete);
        }
      );              
    //debug
    // console.log(url);
  }

  generateList()
  {
    //load data
    this.service.getEmployees()
      .subscribe( 
        res => {
          //get data
          this.list = res as Employee[];
          //data is now loaded
          this.isLoaded = true;
        },
        error => {
          //set to default value if no data is loaded
          this.isLoaded = true;    
          console.error( "Error loading employees: " + this.isLoaded , error );          
        }      
      );
  }

}
