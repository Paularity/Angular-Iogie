import { Component, OnInit, Output } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  isLoaded : boolean;

  // @Output() generate = new EventEmitter;

  constructor( private service : EmployeeService ) { }

  ngOnInit() {        

    //set to default value if no data is loaded
    this.isLoaded = true;     
    this.service.generateList();    
  }

  onDelete( url )
  {
    this.service.isLoaded = false;
    this.service.deleteEmployee( url )
      .subscribe(
        res => {                    
          this.service.generateList(); 
        }
      );              
  }

  populateForm( emp : Employee )
  {
    this.service.formData = Object.assign({}, emp);
  }

}
