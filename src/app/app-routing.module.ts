import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  { path: 'funcionarios', component: EmployeeListComponent },
  { path: '', redirectTo: 'funcionarios', pathMatch: 'full' },
  { path: 'criar-funcionario', component: CreateEmployeeComponent },
  { path: 'atualizar-funcionario/:id', component: UpdateEmployeeComponent },
  { path: 'ver-funcionario/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
