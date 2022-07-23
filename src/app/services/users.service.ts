import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL_API = "http://localhost:5007/api/users"

  //get
  users: any

  constructor(public http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.URL_API}/get-users`)// http://localhost:5007/api/users/get-users
  }

}
