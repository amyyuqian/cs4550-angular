import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private service: UserServiceClient,
    private router: Router) { }

  username;
  password;
  login(username, password) {
    this.service.login(username, password).then(() =>
      this.router.navigate(['profile'])
    )
  }

  ngOnInit() {
  }

}