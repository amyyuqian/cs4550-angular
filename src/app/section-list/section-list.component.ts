import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SectionServiceClient } from "../services/section.service.client";
import { EnrollmentServiceClient } from "../services/enrollment.service.client";
import { UserServiceClient } from "../services/user.service.client"; 
import {User} from "../models/user.model.client";

@Component({
  selector: "app-section-list",
  templateUrl: "./section-list.component.html",
  styleUrls: ["./section-list.component.css"]
})
export class SectionListComponent implements OnInit {
  constructor(
    private sectionService: SectionServiceClient,
    private enrollService: EnrollmentServiceClient,
    private userService: UserServiceClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params =>
      this.loadSections(params["courseId"])
    );
  }

  sectionName = "";
  seats = "";
  courseId = "";
  sections = [];
  enrollments = [];
  user: User = new User();

  loadSections(courseId) {
    this.courseId = courseId;
    this.sectionService
      .getAllSectionsForCourse(courseId)
      .then(sections => (this.sections = sections));
  }

  createSection(name, seats) {
    var body = {
      name: name,
      seats: seats,
      courseId: this.courseId
    };

    this.sectionService.createSection(body, this.courseId).then(() => {
      this.loadSections(this.courseId);
    });
  }

  deleteSection(section) {
    this.sectionService.deleteSection(section._id).then(() => {
      this.loadSections(this.courseId);
    });
  }

  getSectionsForStudent() {
    this.enrollService.getAllSectionsForStudent()
      .then(sections => (this.sections = sections));
  }

  enroll(section) {
    this.enrollService.enroll(section._id).then(() => {
      this.router.navigate(["profile"]);
    });
  }

  unenroll(enrollment) {
    var sectionId = enrollment.sectionId;
    var enrollId = enrollment._id;
    this.enrollService.unenroll(sectionId, enrollId).then(() => {
      this.router.navigate(["profile"]);
    });
  }

  ngOnInit() {
    this.userService.profile().then(user => this.user = user);
  }
}
