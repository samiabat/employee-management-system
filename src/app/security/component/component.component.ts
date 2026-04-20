import { EMPLOYEES_ROUTE } from './../../constants/routes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthenticationFacade } from '../facade/authentication.facade';
import { AuthenticationService } from '../service/authenticaton.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
  providers: [AuthenticationFacade],
})
export class ComponentComponent implements OnInit {
  loginForm: FormGroup;
  currentYear = new Date().getFullYear();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public authenticationService: AuthenticationService,
    public authenticationFacade: AuthenticationFacade
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.authenticationService.logedIn()) {
      this.router.navigate([EMPLOYEES_ROUTE]);
    }
  }

  login() {
    const { valid, touched, dirty } = this.loginForm;

    if (valid && (touched || dirty)) {
      const loginRequest: { username: string; password: string } =
        this.loginForm.value;
      this.authenticationFacade.login(loginRequest).pipe(take(1)).subscribe(() => {
        if (this.authenticationService.logedIn()) {
          this.router.navigate([EMPLOYEES_ROUTE]);
        }
      });
    }
  }

}
