import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar';
import { EventListComponent } from './components/event-list/event-list';
import { EventDetailComponent } from './components/event-detail/event-detail';
import { BookingFormComponent } from './components/booking-form/booking-form';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    EventListComponent,
    EventDetailComponent,
    BookingFormComponent,
    UserDashboardComponent
  ],
  templateUrl: './app.html'
})
export class App {}