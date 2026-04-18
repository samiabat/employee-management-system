import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employees/services/employee.service';
import { RoleService } from 'src/app/roles/services/role.service';
import { SectorService } from 'src/app/sectors/services/sector.service';
import { EMPLOYEES_ROUTE, ROLES_ROUTE, SECTORS_ROUTE } from 'src/app/constants/routes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalEmployees = 0;
  totalRoles = 0;
  totalSectors = 0;
  loading = true;

  summaryCards = [
    {
      title: 'Total Employees',
      value: 0,
      icon: 'people',
      color: '#1565c0',
      bg: '#e3f2fd',
      route: EMPLOYEES_ROUTE,
    },
    {
      title: 'Total Roles',
      value: 0,
      icon: 'badge',
      color: '#2e7d32',
      bg: '#e8f5e9',
      route: ROLES_ROUTE,
    },
    {
      title: 'Total Sectors',
      value: 0,
      icon: 'segment',
      color: '#e65100',
      bg: '#fff3e0',
      route: SECTORS_ROUTE,
    },
  ];

  constructor(
    private employeeService: EmployeeService,
    private roleService: RoleService,
    private sectorService: SectorService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats() {
    this.employeeService.getEmployies().subscribe(data => {
      this.summaryCards[0].value = data?.length ?? 0;
    });
    this.roleService.getRoles().subscribe(data => {
      this.summaryCards[1].value = data?.length ?? 0;
    });
    this.sectorService.getSectors().subscribe(data => {
      this.summaryCards[2].value = data?.length ?? 0;
      this.loading = false;
    });
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
