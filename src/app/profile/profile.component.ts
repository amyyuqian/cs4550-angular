import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
    private router: Router) { }

  user: User = new User();
  update(user: User) {
    var body = {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    }
    this.service.updateUser(body, user).then(() => this.router.navigate(['profile']));
  }

  ngOnInit() {
    this.service.profile().then(user => this.user = user);
  }

}