import { ConfirmDeleteDialogComponent } from '../../../confirm-delete/confirm-delete-dialog/confirm-delete-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from '../../models/employee.model';
import { EmployeeFormComponent } from '../employeeform/employee-form.component';
import { EmployeeFacade } from '../../facades/employee.facade';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DetailComponent } from '../detail/detail.component';
import { AuthenticationFacade } from 'src/app/security/facade/authentication.facade';
import { Router } from '@angular/router';
import { LOGIN_ROUTE } from 'src/app/constants/routes';
import { AuthenticationService } from 'src/app/security/service/authenticaton.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  providers: [EmployeeFacade],
})
export class EmployeeListComponent implements OnInit {
  d_Colums: string[] = ['avatar', 'id', 'name', 'full_name', 'phone', 'email', 'active', 'created_date', 'updated_date', 'det'];
  dSource!: MatTableDataSource<Employee>;
  flag = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private employeeFacade: EmployeeFacade,
    private employeeService: EmployeeService,
    private matDialog: MatDialog, 
    public authenticationFacade: AuthenticationFacade, 
    private router: Router,
    private authenticationService: AuthenticationService,
    ) {
  }

  ngOnInit(): void {
    console.log(this.authenticationService.logedIn())
    if (!this.authenticationService.logedIn()){
      this.router.navigate([LOGIN_ROUTE]);
    }
    this.getEmployee();
  }

  getEmployee(){
    this.employeeService.getEmployies().subscribe((data)=>{
      this.dSource = new MatTableDataSource(data);
      this.dSource = new MatTableDataSource(data);
      this.dSource.paginator = this.paginator;
    })
  }
  addEmployee() {
    this.matDialog.open(EmployeeFormComponent, {
      data: { update: false },
    }).afterClosed().subscribe(()=>{this.getEmployee()});
  }

  editEmployee(employee: Employee) {
    console.log(employee);
    this.employeeFacade.selectEmployee(employee);
    this.matDialog.open(EmployeeFormComponent, {
      data: { update: true },
    }).afterClosed().subscribe(()=>{this.getEmployee()});
  }

  viewEmployee(employee: Employee){
    this.employeeFacade.selectEmployee(employee);
    this.matDialog.open(DetailComponent,{
      data: {data: employee}
    });
  }

  deleteEmployee(employee: Employee) {
    const dialogRef = this.matDialog.open(ConfirmDeleteDialogComponent);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result && employee.id) {
        this.employeeFacade.deleteEmployee(employee.id);

      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dSource.filter = filterValue.trim().toLowerCase();

    if (this.dSource.paginator) {
      this.dSource.paginator.firstPage();
    }
  }

  getAvatarUrl(name: string): string {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'User')}&background=c62828&color=fff&size=36&rounded=true&bold=true`;
  }

  exportCSV() {
    if (!this.dSource?.data?.length) return;
    const headers = ['ID', 'Username', 'Full Name', 'Email', 'Phone', 'Department', 'Title', 'Status', 'Created Date'];
    const rows = this.dSource.data.map(e => [
      e.id ?? '',
      e.username ?? '',
      e.full_name ?? '',
      e.email_address ?? '',
      e.mobile ?? '',
      e.department ?? '',
      e.title ?? '',
      e.active ? 'Active' : 'Inactive',
      e.created_date ?? '',
    ]);
    const csv = [headers, ...rows].map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'employees.csv';
    a.click();
    URL.revokeObjectURL(url);
  }
}
