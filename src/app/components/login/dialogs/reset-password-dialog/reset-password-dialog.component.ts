import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/Authorization/auth.service';

@Component({
  selector: 'app-reset-password-dialog',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './reset-password-dialog.component.html',
  styleUrl: './reset-password-dialog.component.scss'
})
export class ResetPasswordDialogComponent {
  email = '';

  onNoClick(): void {
    this.dialogRef.close();
  }

  resetPassword() {
    // Call the reset password service
    this.authService.resetPassword(this.email)
      .then(() => {
        console.log('If there is an account with that email, a password reset email has been sent.');
        this.dialogRef.close();
      })
      .catch(error => {
        console.error('Reset password failed: ', error);
      });
  }

  constructor(public dialogRef: MatDialogRef<ResetPasswordDialogComponent>, private authService: AuthService) { }
}
