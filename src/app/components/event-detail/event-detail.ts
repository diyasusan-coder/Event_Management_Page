import { Component } from '@angular/core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.html'
})
export class EventDetailComponent {

  event = {
    name: 'Music Concert',
    date: '2026-04-10',
    location: 'Kochi',
    description: 'A live music concert with famous artists.'
  };

}