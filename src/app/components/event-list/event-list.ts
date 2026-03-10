import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../services/event';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-list.html'
})
export class EventListComponent {

  events: any[] = [];

  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }

}