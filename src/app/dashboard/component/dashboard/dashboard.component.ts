import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employees/services/employee.service';
import { RoleService } from 'src/app/roles/services/role.service';
import { SectorService } from 'src/app/sectors/services/sector.service';
import { EMPLOYEES_ROUTE, ROLES_ROUTE, SECTORS_ROUTE } from 'src/app/constants/routes';
import { Employee } from 'src/app/employees/models/employee.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalEmployees = 0;
  activeEmployees = 0;
  totalRoles = 0;
  totalSectors = 0;
  loading = true;
  today = new Date();

  recentEmployees: Employee[] = [];

  deptDistribution: { name: string; count: number; pct: number; color: string }[] = [];

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
      this.totalEmployees = data?.length ?? 0;
      this.activeEmployees = data?.filter((e: Employee) => e.active).length ?? 0;
      this.recentEmployees = (data ?? []).slice(-5).reverse();
      this.computeDeptDistribution(data ?? []);
    });
    this.roleService.getRoles().subscribe(data => {
      this.totalRoles = data?.length ?? 0;
    });
    this.sectorService.getSectors().subscribe(data => {
      this.totalSectors = data?.length ?? 0;
      this.loading = false;
    });
  }

  computeDeptDistribution(employees: Employee[]) {
    const colors: Record<string, string> = {
      'IT': '#3b82f6',
      'Human Resources': '#8b5cf6',
      'Finance': '#10b981',
      'Sales & Marketing': '#f59e0b',
      'Brewing': '#ef4444',
      'Operations': '#6366f1',
    };
    const counts: Record<string, number> = {};
    for (const e of employees) {
      if (e.department) {
        counts[e.department] = (counts[e.department] || 0) + 1;
      }
    }
    const max = Math.max(...Object.values(counts), 1);
    this.deptDistribution = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, count]) => ({
        name,
        count,
        pct: Math.round((count / max) * 100),
        color: colors[name] || '#94a3b8',
      }));
  }

  getAvatarUrl(name: string): string {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=40&bold=true`;
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
