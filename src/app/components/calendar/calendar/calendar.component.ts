import { Component } from '@angular/core';

import { ChildCalendarComponent } from './child-calendar/child-calendar.component';
import { ParentCalendarComponent } from './parent-calendar/parent-calendar.component';

import { CalendarService } from '../../../services/Calendar/calendar.service';
import { AuthService } from '../../../services/Authorization/auth.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    ChildCalendarComponent,
    ParentCalendarComponent
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  isChild(): boolean {
    return this.authService.hasRole('child');
  }

  isParent(): boolean {
    return this.authService.hasRole('parent');
  }

  constructor(private calendarService: CalendarService, private authService: AuthService) {}
}
