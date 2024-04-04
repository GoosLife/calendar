import { Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

import { LoginComponent } from './components/login/login.component';
import { CalendarComponent } from './components/calendar/calendar/calendar.component';

export const routes: Routes = [
  { path: 'calendar', component: CalendarComponent, canActivate: [authGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];