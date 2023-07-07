import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout'
import { MANAGE_ACCOUNT_ROUTE, LOGIN_ROUTE, LOGOUT_ROUTE, NOTIFICATIONS_ROUTE, DASHBOARD_ROUTE, EMPLOYEES_ROUTE, ROLES_ROUTE, SECTORS_ROUTE } from '../constants/routes';
import { MatSidenav } from '@angular/material/sidenav'
import { Router } from '@angular/router';
import { delay } from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav

  constructor(private observer: BreakpointObserver, 
     private router: Router,
     ) {}

  manageAccountsRoute = {
    link: MANAGE_ACCOUNT_ROUTE,
    label: 'Manage Accounts',
    icon: 'account_circle',
  }

  loginRoute = {
    link: LOGIN_ROUTE,
    label: 'Login',
    icon: '',
  }

  logoutRoute = {
    link: LOGOUT_ROUTE,
    label: 'Logout',
    icon: 'logout',
  }

  notificationsRoute = {
    link: NOTIFICATIONS_ROUTE,
    label: 'Notifications',
    icon: 'notifications',
  }

  mainNavLinks = [
    { link: DASHBOARD_ROUTE, label: 'Dashboard', icon: 'dashboard' },
    { link: EMPLOYEES_ROUTE, label: 'Emplyees', icon: 'list_alt' },
    { link: ROLES_ROUTE, label: 'Roles', icon: 'list' },
    { link: SECTORS_ROUTE, label: 'Sectors', icon: 'segment' },
    {
      link: MANAGE_ACCOUNT_ROUTE,
      label: 'Manage Accounts',
      icon: 'account_circle',
    }
  ]


  ngAfterViewInit() {
      this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over'
          this.sidenav.close()
        } else {
          this.sidenav.mode = 'side'
          this.sidenav.open()
        }
      })
    }
  }
  
