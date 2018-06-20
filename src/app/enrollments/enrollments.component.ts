import { Component, OnInit, Input } from '@angular/core';
import { SectionServiceClient } from '../services/section.service.client';
import { EnrollmentServiceClient } from '../services/enrollment.service.client';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';


@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.css']
})
export class EnrollmentsComponent implements OnInit {
  isUserLoggedIn: boolean;

  constructor(    private sectionService: SectionServiceClient,
    private enrollService: EnrollmentServiceClient,
    private router: Router,
    private dataSharingService: DataSharingService) { 
      this.dataSharingService.isUserLoggedIn.subscribe( value => {
        this.isUserLoggedIn = value;
      })
    }

  @Input() courseId;
  @Input() course;
  sections = [];
  enrollments = [];

  loadSections(courseId) {
    this.courseId = courseId;

    this.sectionService
      .getAllSectionsForCourse(courseId)
      .then(sections => {
        this.sections = sections;
      });
  }

  getSectionsForStudent() {
    this.enrollService
      .getAllSectionsForStudent()
      .then(enrollments => {this.enrollments = enrollments});
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
    this.loadSections(this.course.id);
    this.getSectionsForStudent();
  }

}
