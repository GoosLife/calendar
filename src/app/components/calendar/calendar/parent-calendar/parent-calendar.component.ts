import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ChildCalendarComponent } from '../child-calendar/child-calendar.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarService } from '../../../../services/Calendar/calendar.service';
import { AuthService } from '../../../../services/Authorization/auth.service';


@Component({
  selector: 'app-parent-calendar',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './parent-calendar.component.html',
  styleUrl: './parent-calendar.component.scss'
})
export class ParentCalendarComponent {
  event: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    startTime: new FormControl('', [Validators.required]),
    endTime: new FormControl('', [Validators.required]),
  });

  viewDay(date: string) {
    this.viewDayDialog.open(ChildCalendarComponent, {
      data: {
        queryParam: date
      }
    });
  }

  addEvent() {
    // Add event to calendar
    this.calendarService.addEvent(this.authService.getUserId(), this.authService.getUserToken(), this.event.value);
  }

  constructor(public viewDayDialog: MatDialog, private authService: AuthService, private calendarService: CalendarService) { }
}
