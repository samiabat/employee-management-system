import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DemoDataService } from '../services/demo-data.service';
import { EMPLOYEES_URL, ROLES_URL, SECTORS_URL, LOGIN_URL } from '../constants/urls';

@Injectable()
export class DemoFallbackInterceptor implements HttpInterceptor {
  constructor(private demoData: DemoDataService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const url = req.url;

        // LOGIN
        if (url.includes('/api/login/')) {
          return of(new HttpResponse({
            status: 200,
            body: { access: 'demo-access-token', refresh: 'demo-refresh-token' },
          }));
        }

        // EMPLOYEES
        if (url.startsWith(EMPLOYEES_URL)) {
          return this.handleEmployeeRequest(req);
        }

        // ROLES
        if (url.startsWith(ROLES_URL)) {
          return this.handleRoleRequest(req);
        }

        // SECTORS
        if (url.startsWith(SECTORS_URL)) {
          return this.handleSectorRequest(req);
        }

        return throwError(() => error);
      })
    );
  }

  private handleEmployeeRequest(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    const employees = this.demoData.getEmployees();

    if (req.method === 'GET') {
      const id = this.extractId(req.url, EMPLOYEES_URL);
      if (id !== null) {
        const item = employees.find(e => e.id === id) ?? null;
        return of(new HttpResponse({ status: 200, body: item }));
      }
      return of(new HttpResponse({ status: 200, body: employees }));
    }

    if (req.method === 'POST') {
      const body = { ...req.body, id: Date.now() };
      return of(new HttpResponse({ status: 201, body }));
    }

    if (req.method === 'PUT' || req.method === 'PATCH') {
      return of(new HttpResponse({ status: 200, body: req.body }));
    }

    if (req.method === 'DELETE') {
      return of(new HttpResponse({ status: 204, body: null }));
    }

    return of(new HttpResponse({ status: 200, body: employees }));
  }

  private handleRoleRequest(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    const roles = this.demoData.getRoles();

    if (req.method === 'GET') {
      const id = this.extractId(req.url, ROLES_URL);
      if (id !== null) {
        const item = roles.find(r => r.id === id) ?? null;
        return of(new HttpResponse({ status: 200, body: item }));
      }
      return of(new HttpResponse({ status: 200, body: roles }));
    }

    if (req.method === 'POST') {
      return of(new HttpResponse({ status: 201, body: { ...req.body, id: Date.now() } }));
    }

    if (req.method === 'PUT' || req.method === 'PATCH') {
      return of(new HttpResponse({ status: 200, body: req.body }));
    }

    if (req.method === 'DELETE') {
      return of(new HttpResponse({ status: 204, body: null }));
    }

    return of(new HttpResponse({ status: 200, body: roles }));
  }

  private handleSectorRequest(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    const sectors = this.demoData.getSectors();

    if (req.method === 'GET') {
      const id = this.extractId(req.url, SECTORS_URL);
      if (id !== null) {
        const item = sectors.find(s => s.id === id) ?? null;
        return of(new HttpResponse({ status: 200, body: item }));
      }
      return of(new HttpResponse({ status: 200, body: sectors }));
    }

    if (req.method === 'POST') {
      return of(new HttpResponse({ status: 201, body: { ...req.body, id: Date.now() } }));
    }

    if (req.method === 'PUT' || req.method === 'PATCH') {
      return of(new HttpResponse({ status: 200, body: req.body }));
    }

    if (req.method === 'DELETE') {
      return of(new HttpResponse({ status: 204, body: null }));
    }

    return of(new HttpResponse({ status: 200, body: sectors }));
  }

  private extractId(url: string, baseUrl: string): number | null {
    const suffix = url.replace(baseUrl, '').replace(/^\//, '').replace(/\/$/, '');
    if (suffix && !isNaN(Number(suffix))) {
      return Number(suffix);
    }
    return null;
  }
}
