import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/Authorization/auth.service';

const checkRole = (AuthService: AuthService, Router: Router, requiredRole: string) => {
  return () => {
    console.log(AuthService.hasRole(requiredRole));
    return AuthService.hasRole(requiredRole) ? true : false;
  }
}

export const roleGuard = (requiredRole: string): CanActivateFn => {
  return (route, state) => {
    const authService = inject(AuthService);
    const routerService = inject(Router);
    console.log(requiredRole);
    return checkRole(authService, routerService, requiredRole)();
  }
}
