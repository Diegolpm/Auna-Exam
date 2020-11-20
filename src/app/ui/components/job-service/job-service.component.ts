import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/data/services/job-service.service';

@Component({
  selector: 'app-job-service',
  templateUrl: './job-service.component.html',
  styleUrls: ['./job-service.component.scss']
})
export class JobServiceComponent implements OnInit {


  myJob;
  jobFound;

  constructor(private jobService: JobServiceService) { }

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
