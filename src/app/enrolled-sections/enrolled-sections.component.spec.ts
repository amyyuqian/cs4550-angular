import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledSectionsComponent } from './enrolled-sections.component';

describe('EnrolledSectionsComponent', () => {
  let component: EnrolledSectionsComponent;
  let fixture: ComponentFixture<EnrolledSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolledSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
