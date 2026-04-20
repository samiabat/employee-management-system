import { Injectable } from '@angular/core';
import { Employee } from '../employees/models/employee.model';
import { Role } from '../roles/models/role.model';
import { Sector } from '../sectors/models/sector.model';

@Injectable({ providedIn: 'root' })
export class DemoDataService {
  private readonly employees: Employee[] = [
    { id: 1, username: 'abebe.girma', full_name: 'Abebe Girma', title: 'CEO', department: 'Executive', email_address: 'abebe.girma@bgi.com', mobile: '+251911001001', active: true, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2022-01-10', updated_date: '2024-01-15', created_by: 'system' },
    { id: 2, username: 'tigist.bekele', full_name: 'Tigist Bekele', title: 'HR Manager', department: 'Human Resources', email_address: 'tigist.bekele@bgi.com', mobile: '+251911002002', active: true, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2022-02-14', updated_date: '2024-02-10', created_by: 'abebe.girma' },
    { id: 3, username: 'solomon.tadesse', full_name: 'Solomon Tadesse', title: 'CTO', department: 'IT', email_address: 'solomon.tadesse@bgi.com', mobile: '+251911003003', active: true, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2022-03-20', updated_date: '2024-03-05', created_by: 'abebe.girma' },
    { id: 4, username: 'hana.worku', full_name: 'Hana Worku', title: 'Finance Director', department: 'Finance', email_address: 'hana.worku@bgi.com', mobile: '+251911004004', active: true, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2022-04-01', updated_date: '2024-04-12', created_by: 'abebe.girma' },
    { id: 5, username: 'dawit.mengistu', full_name: 'Dawit Mengistu', title: 'Software Engineer', department: 'IT', email_address: 'dawit.mengistu@bgi.com', mobile: '+251911005005', active: true, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2022-05-11', updated_date: '2024-05-20', created_by: 'solomon.tadesse' },
    { id: 6, username: 'selamawit.haile', full_name: 'Selamawit Haile', title: 'Sales Manager', department: 'Sales & Marketing', email_address: 'selamawit.haile@bgi.com', mobile: '+251911006006', active: true, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2022-06-03', updated_date: '2024-06-18', created_by: 'abebe.girma' },
    { id: 7, username: 'yonas.assefa', full_name: 'Yonas Assefa', title: 'QA Engineer', department: 'IT', email_address: 'yonas.assefa@bgi.com', mobile: '+251911007007', active: true, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2022-07-22', updated_date: '2024-07-30', created_by: 'solomon.tadesse' },
    { id: 8, username: 'meron.alemu', full_name: 'Meron Alemu', title: 'Operations Manager', department: 'Operations', email_address: 'meron.alemu@bgi.com', mobile: '+251911008008', active: false, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2022-08-09', updated_date: '2024-08-14', created_by: 'abebe.girma' },
    { id: 9, username: 'biruk.tesfaye', full_name: 'Biruk Tesfaye', title: 'Brew Master', department: 'Brewing', email_address: 'biruk.tesfaye@bgi.com', mobile: '+251911009009', active: true, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2022-09-17', updated_date: '2024-09-01', created_by: 'meron.alemu' },
    { id: 10, username: 'rahel.kebede', full_name: 'Rahel Kebede', title: 'HR Specialist', department: 'Human Resources', email_address: 'rahel.kebede@bgi.com', mobile: '+251911010010', active: true, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2022-10-25', updated_date: '2024-10-05', created_by: 'tigist.bekele' },
    { id: 11, username: 'michael.johnson', full_name: 'Michael Johnson', title: 'Business Analyst', department: 'Finance', email_address: 'm.johnson@bgi.com', mobile: '+251911011011', active: true, company: 'BGI Ethiopia', country: 'USA', created_date: '2022-11-30', updated_date: '2024-11-10', created_by: 'hana.worku' },
    { id: 12, username: 'anna.schmidt', full_name: 'Anna Schmidt', title: 'Brand Manager', department: 'Sales & Marketing', email_address: 'a.schmidt@bgi.com', mobile: '+251911012012', active: true, company: 'BGI Ethiopia', country: 'Germany', created_date: '2023-01-08', updated_date: '2024-01-22', created_by: 'selamawit.haile' },
    { id: 13, username: 'liya.solomon', full_name: 'Liya Solomon', title: 'Frontend Developer', department: 'IT', email_address: 'liya.solomon@bgi.com', mobile: '+251911013013', active: true, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2023-02-14', updated_date: '2024-02-28', created_by: 'solomon.tadesse' },
    { id: 14, username: 'temesgen.wolde', full_name: 'Temesgen Wolde', title: 'Supply Chain Officer', department: 'Operations', email_address: 'temesgen.wolde@bgi.com', mobile: '+251911014014', active: false, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2023-03-05', updated_date: '2024-03-19', created_by: 'meron.alemu' },
    { id: 15, username: 'sofia.ibrahim', full_name: 'Sofia Ibrahim', title: 'Accountant', department: 'Finance', email_address: 'sofia.ibrahim@bgi.com', mobile: '+251911015015', active: true, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2023-04-11', updated_date: '2024-04-25', created_by: 'hana.worku' },
    { id: 16, username: 'amanuel.bekele', full_name: 'Amanuel Bekele', title: 'Production Supervisor', department: 'Brewing', email_address: 'amanuel.bekele@bgi.com', mobile: '+251911016016', active: true, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2023-05-20', updated_date: '2024-05-30', created_by: 'biruk.tesfaye' },
    { id: 17, username: 'hiwot.girma', full_name: 'Hiwot Girma', title: 'Recruitment Specialist', department: 'Human Resources', email_address: 'hiwot.girma@bgi.com', mobile: '+251911017017', active: true, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2023-06-18', updated_date: '2024-06-22', created_by: 'tigist.bekele' },
    { id: 18, username: 'kaleb.desta', full_name: 'Kaleb Desta', title: 'DevOps Engineer', department: 'IT', email_address: 'kaleb.desta@bgi.com', mobile: '+251911018018', active: true, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2023-07-10', updated_date: '2024-07-15', created_by: 'solomon.tadesse' },
    { id: 19, username: 'mekdes.hailu', full_name: 'Mekdes Hailu', title: 'Marketing Analyst', department: 'Sales & Marketing', email_address: 'mekdes.hailu@bgi.com', mobile: '+251911019019', active: false, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2023-08-28', updated_date: '2024-08-08', created_by: 'selamawit.haile' },
    { id: 20, username: 'natnael.yilma', full_name: 'Natnael Yilma', title: 'Quality Control Analyst', department: 'Brewing', email_address: 'natnael.yilma@bgi.com', mobile: '+251911020020', active: true, company: 'BGI Ethiopia', country: 'Ethiopia', created_date: '2023-09-15', updated_date: '2024-09-20', created_by: 'biruk.tesfaye' },
  ];

  private readonly roles: Role[] = [
    { id: 1, name: 'CEO', description: 'Chief Executive Officer — overall company leadership' },
    { id: 2, name: 'CTO', description: 'Chief Technology Officer — technology strategy and oversight' },
    { id: 3, name: 'HR Manager', description: 'Human Resources Manager — talent and people management' },
    { id: 4, name: 'Software Engineer', description: 'Software development and maintenance' },
    { id: 5, name: 'Sales Manager', description: 'Sales strategy and team management' },
    { id: 6, name: 'Operations Manager', description: 'Operational efficiency and logistics' },
    { id: 7, name: 'Finance Director', description: 'Financial planning, reporting and compliance' },
    { id: 8, name: 'QA Engineer', description: 'Quality assurance and software testing' },
  ];

  private readonly sectors: Sector[] = [
    { id: 1, name: 'Brewing', created_by: 'system' },
    { id: 2, name: 'Sales & Marketing', created_by: 'system' },
    { id: 3, name: 'IT', created_by: 'system' },
    { id: 4, name: 'Human Resources', created_by: 'system' },
    { id: 5, name: 'Finance', created_by: 'system' },
    { id: 6, name: 'Operations', created_by: 'system' },
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }

  getRoles(): Role[] {
    return this.roles;
  }

  getSectors(): Sector[] {
    return this.sectors;
  }
}
