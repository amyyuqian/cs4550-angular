import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {Course} from "../models/course.model.client";
import {SectionServiceClient} from "../services/section.service.client";
import {Section} from "../models/section.model.client";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
