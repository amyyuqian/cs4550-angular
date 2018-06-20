import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SectionServiceClient } from "../services/section.service.client";
import { EnrollmentServiceClient } from "../services/enrollment.service.client";

@Component({
  selector: "app-section-list",
  templateUrl: "./section-list.component.html",
  styleUrls: ["./section-list.component.css"]
})
export class SectionListComponent implements OnInit {
  constructor(
    private sectionService: SectionServiceClient,
    private enrollService: EnrollmentServiceClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //this.route.params.subscribe(params =>
    //  this.loadSections(params["courseId"])
    //);
  }

  sectionName;
  seats = "";
  @Input() courseId;
  @Input() course;
  sections = [];
  editSectionName = "";
  editSeats = "";
  editingSection;

  loadSections(courseId) {
    this.courseId = courseId;

    this.sectionService
      .getAllSectionsForCourse(courseId)
      .then(sections => {
        this.sections = sections;
        this.sectionName = this.course.title + ' ' + (this.sections.length + 1);
      });

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

  updateSection() {
    var sectionId = this.editingSection._id;
    var body = {
      name: this.editSectionName,
      seats: this.editSeats,
    }
    this.sectionService.updateSection(body, sectionId).then(() => {
      this.loadSections(this.courseId);
    });
  }

  setEditingSection(section) {
    this.editingSection = section;
    this.editSeats = section.seats;
    this.editSectionName = section.name;
  }

  ngOnInit() {
    this.loadSections(this.course.id);
  }
}
