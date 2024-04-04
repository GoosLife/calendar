import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-calendar.component.html',
  styleUrl: './child-calendar.component.scss'
})
export class ChildCalendarComponent implements OnInit {
  date: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.data.date) {
      this.date = this.data.date;
    } else {
      this.date = this.route.snapshot.queryParamMap.get('date') || this.getTodayDate();
    }
  }

  private getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }
}
