import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  // Determine whether password should be visible - the user can toggle visibility
  hide = true;

  login() {
    if (this.validateLogin()) {
      this.authService.login(this.loginData.value.username, this.loginData.value.password)
        .then(isAuthenticated => {
          if (isAuthenticated) {
            this.router.navigate(['/calendar']);
          }
          else {
            this.loginData.setErrors({ invalidLogin: true });
          }
        })
        .catch(error => {
          console.error('Login failed: ', error);
        });
    }
    else {
      this.loginData.setErrors({ invalidLogin: true });
    }
  }

  getErrors() {
    if (this.loginData.hasError('invalidLogin')) {
      return 'Invalid username or password. Please try again.';
    }
    else {
      return '';
    }
  }

  validateLogin() {
    this.loginData.markAllAsTouched();
    return this.loginData.valid;
  }

  constructor(private router: Router, private authService: AuthService) {}
}
