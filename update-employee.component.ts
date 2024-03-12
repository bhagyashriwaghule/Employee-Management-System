import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterOutlet } from '@angular/router';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {
  id:number=0;
  employee:Employee=new Employee();


  constructor(private employeeSrevice:EmployeeService,private route:ActivatedRoute,private router:Router){}

  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];

    this.employeeSrevice.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    })

  }

  onSubmit(){

    this.employeeSrevice.updateEmployee(this.id,this.employee).subscribe(data=>{

      this.employee=data;
      this.goToEmployeeList();
    })
  }

  goToEmployeeList(){

    this.router.navigate(['/employees']);
  }


}
