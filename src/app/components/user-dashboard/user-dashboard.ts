import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../services/booking';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-dashboard.html'
})
export class UserDashboardComponent {

  bookings:any[] = [];

  constructor(private bookingService: BookingService){
    this.bookings = this.bookingService.getBookings();
  }

  deleteBooking(index:number){
    this.bookingService.deleteBooking(index);
    this.bookings = this.bookingService.getBookings();
  }

}