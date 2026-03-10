import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../../services/booking';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booking-form.html'
})
export class BookingFormComponent {

  name = '';
  event = '';

  constructor(private bookingService: BookingService) {}

  bookTicket() {

    const booking = {
      name: this.name,
      event: this.event
    };

    this.bookingService.addBooking(booking);

    alert("Booking Successful!");
  }

}