import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { SearchComponent } from './search/search.component';
import { ConnectComponent } from './connect/connect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { connect } from 'rxjs';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { employeeGuard } from './guard/employee.guard';
import { notconnectedGuard } from './guard/notconnected.guard';
import { ConnectHttpComponent } from './connect-http/connect-http.component';
const routes: Routes = [
  {path: "employees", component : EmployeesComponent, canActivate : [notconnectedGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'connect'},
  {path: "add-employee" , component : AddEmployeeComponent , canActivate : [employeeGuard]},
  {path: "updateEmployee/:num", component : UpdateEmployeeComponent},
  {path : "search" , component : SearchComponent , canActivate : [notconnectedGuard]},
  {path : "dashboard" , component : DashboardComponent, canActivate : [notconnectedGuard]},
  {path : "connect" , component : ConnectComponent},
  {path : "forbidden" , component : ForbiddenComponent},
  {path : "httpC" , component : ConnectHttpComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
