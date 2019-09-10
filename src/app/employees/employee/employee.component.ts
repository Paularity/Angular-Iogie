import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor( private service : EmployeeService ) 
  {
    this.resetForm();
  }  

  ngOnInit() 
  {
  }

  resetForm( form ?: NgForm )
  {
    if( form != null )
    {
      form.resetForm(); 
    }    
    
    this.service.formData = {
      url: '',
      last_name: '',
      first_name: '',
      middle_name: '',
      nick_name: '',
      gender: ''
    }
  }

  onSubmit(form : NgForm)
  {
    this.service.isLoaded = false;    

    if( form.value.url == '' )
    {
      this.insertRecord( form );
    }
    else
    {
      this.updateRecord( form );
    }    
  }

  insertRecord( form: NgForm )
  {
    this.service.postEmployee( form.value )
      .subscribe(
        res => {                     
          this.resetForm(form);     
          this.service.generateList();
        }
      );
  }

  updateRecord(form: NgForm)
  {
    this.service.putEmployee( form.value.url, form.value )
      .subscribe(
        res => {           
          this.resetForm(form);     
          this.service.generateList();
        }
      );
  }

}
