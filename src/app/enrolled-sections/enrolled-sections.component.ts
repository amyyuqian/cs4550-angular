import { Component, OnInit, Input } from "@angular/core";
import { SectionServiceClient } from "../services/section.service.client";
import { EnrollmentServiceClient } from "../services/enrollment.service.client";
import { Router, ActivatedRoute } from "@angular/router";
import { CourseServiceClient } from "../services/course.service.client";
import { encodeUriSegment } from "@angular/router/src/url_tree";

@Component({
  selector: "app-enrolled-sections",
  templateUrl: "./enrolled-sections.component.html",
  styleUrls: ["./enrolled-sections.component.css"]
})
export class EnrolledSectionsComponent implements OnInit {
  constructor(
    private enrollService: EnrollmentServiceClient,
    private sectionService: SectionServiceClient,
    private courseService: CourseServiceClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  enrollments = [];

  getSectionsForStudent() {
    this.enrollService.getAllSectionsForStudent().then(enrollments => {
      this.enrollments = enrollments;
      this.getCourseTitles();
    });
  }

  getCourseTitles() {
    this.enrollments.forEach(enrollment => {
      var sectionId = enrollment.sectionId;
      this.sectionService.getSectionById(sectionId).then(section => {
        enrollment["sectionTitle"] = section.name;
      });
    });
  }

  unenroll(enrollment) {
    var sectionId = enrollment.sectionId;
    var enrollId = enrollment._id;
    this.enrollService.unenroll(sectionId, enrollId).then(() => {
      this.getSectionsForStudent();
    });
  }

  ngOnInit() {
    this.getSectionsForStudent();
  }
}
