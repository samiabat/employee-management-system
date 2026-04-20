import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LOGIN_ROUTE } from './constants/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-management';
  showNavigation = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      const url: string = (e as NavigationEnd).urlAfterRedirects;
      this.showNavigation = url !== '/' && !url.startsWith('/' + LOGIN_ROUTE);
    });
  }
}
