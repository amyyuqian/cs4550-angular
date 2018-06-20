import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from "../services/course.service.client";
import { SectionServiceClient } from "../services/section.service.client";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-section-editor',
  templateUrl: './section-editor.component.html',
  styleUrls: ['./section-editor.component.css']
})
export class SectionEditorComponent implements OnInit {

  constructor(
    private sectionService: SectionServiceClient,
    private courseService: CourseServiceClient,
    private router: Router
  ) { }

  courses = []

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
