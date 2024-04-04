import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  getAllEvents(userId: string, token: string) {
    return this.httpClient.get(
      'https://api.example.com/events',
      {
        headers: { 'Authorization': `Bearer ${token}` }
      });
  }

  getAllEventsByDate(userId: string, token: string, date: Date) {
    return this.httpClient.get(
      'https://api.example.com/events',
      {
        headers: { 'Authorization': `Bearer ${token}` },
        params: { date: date.toISOString() }
      });
  }

  getEvent(userId: string, token: string, eventId: string) {
    return this.httpClient.get(
      `https://api.example.com/events/${eventId}`,
      {
        headers: { 'Authorization': `Bearer ${token}` }
      });
  }

  addEvent(userId: string, token: string, event: any) {
    return this.httpClient.post(
      'https://api.example.com/events',
      event,
      {
        headers: { 'Authorization': `Bearer ${token}` }
      });
  }

  editEvent(userId: string, token: string, event: any) {
    return this.httpClient.put(
      `https://api.example.com/events/${event.id}`,
      event,
      {
        headers: { 'Authorization': `Bearer ${token}` }
      }
    );
  }

  deleteEvent(userId: string, token: string, eventId: string) {
    return this.httpClient.delete(
      `https://api.example.com/events/${eventId}`,
      {
        headers: { 'Authorization': `Bearer ${token}` }
      }
    );
  }

  constructor(private httpClient: HttpClient) { }
}
