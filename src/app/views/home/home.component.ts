import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = "Michael Cocuy"
  result = 0

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers()
    this.result = this.sum()
    console.log('hola')
  }

  sum(): number {
    return 24 + 12
  }

  getUsers() {
    this.userService.getUsers().subscribe( (res) => {
      this.userService.users = res
      console.log(this.userService.users)
    })
  }

}
