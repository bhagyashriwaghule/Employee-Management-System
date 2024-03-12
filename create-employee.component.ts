import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee:Employee=new Employee();

  constructor(private employeeService:EmployeeService,private router:Router){}

  onSubmit(){

    this.insertEmployee();
    console.log(this.employee)
  }

  insertEmployee(){

    this.employeeService.createEmployee(this.employee).subscribe(data=>{

      this.goToEmployeeList();
      console.log(data);
    })
  }

  goToEmployeeList(){

    this.router.navigate(['/employees']);
  }

}
