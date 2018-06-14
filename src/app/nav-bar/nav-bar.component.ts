import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private userService: UserServiceClient,
    private router: Router) { }

  user;

  logout() {
    this.userService.logout().then(() => this.router.navigate(['home']))
  }

  ngOnInit() {
    this.userService.profile().then(user => this.user = user);
  }

}
