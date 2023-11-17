import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
const routes: Routes = [
  {path: "employees", component : EmployeesComponent},
  {path: '', pathMatch: 'full', redirectTo: 'employees'},
  {path: "add-employee" , component : AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
