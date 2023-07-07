import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EmployeeListComponent } from './components/emplyee-list/employee-list.component'

const routes: Routes = [{ path: '', component: EmployeeListComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployiesRoutingModule {}
