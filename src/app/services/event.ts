import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events = [
    { id: 1, name: 'Music Concert', category: 'Music', date: '2026-04-10', location: 'Kochi' },
    { id: 2, name: 'Tech Conference', category: 'Technology', date: '2026-05-12', location: 'Bangalore' },
    { id: 3, name: 'Art Exhibition', category: 'Art', date: '2026-06-05', location: 'Delhi' }
  ];

  getEvents() {
    return this.events;
  }

  getEventById(id: number) {
    return this.events.find(event => event.id === id);
  }
}