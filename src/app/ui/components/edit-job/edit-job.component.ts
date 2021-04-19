import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/data/services/job-service.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {

  myJob;
  jobFound;

  constructor(
    private jobService: JobServiceService
  ) { }

  ngOnInit(): void {
  }

  getPosition($event): void {
    this.myJob = this.jobService.getOneServiceJob($event);
    this.jobFound = this.myJob;
  }

  editJob(){
    this.jobService.editJobService(this.jobFound);
  }

}
