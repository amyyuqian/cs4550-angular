import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {Route, Router} from "@angular/router";
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isUserLoggedIn: boolean;

  constructor(private userService: UserServiceClient,
    private router: Router, private dataSharingService: DataSharingService) { 
      this.dataSharingService.isUserLoggedIn.subscribe( value => {
        this.isUserLoggedIn = value;
    });
    }

  user;

  logout() {
    this.userService.logout()
    .then(() => this.dataSharingService.isUserLoggedIn.next(false))
    .then(() => this.router.navigate(['home']))
  }

  ngOnInit() {
  }

}
