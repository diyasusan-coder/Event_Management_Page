import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = {
    name: 'Guest User'
  };

  getUser() {
    return this.user;
  }
}