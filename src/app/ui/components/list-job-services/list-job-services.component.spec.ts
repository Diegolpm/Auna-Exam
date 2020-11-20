import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobServicesComponent } from './list-job-services.component';

describe('ListJobServicesComponent', () => {
  let component: ListJobServicesComponent;
  let fixture: ComponentFixture<ListJobServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJobServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
