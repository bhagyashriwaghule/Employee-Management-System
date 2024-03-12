import { Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

export const routes: Routes = [
    {path:'employees', component:ListEmployeeComponent},
    {path:'create-employee',component:CreateEmployeeComponent},
    {path:'', redirectTo:'employees', pathMatch:'full'},
    {path:'update-employee/:id',component:UpdateEmployeeComponent},
    {path:'employee-details/:id',component:EmployeeDetailsComponent}

];
