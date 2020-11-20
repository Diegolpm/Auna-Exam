import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobServiceComponent } from './new-job-service.component';

describe('NewJobServiceComponent', () => {
  let component: NewJobServiceComponent;
  let fixture: ComponentFixture<NewJobServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewJobServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
