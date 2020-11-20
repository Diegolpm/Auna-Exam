import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/data/services/job-service.service';

@Component({
  selector: 'app-new-job-service',
  templateUrl: './new-job-service.component.html',
  styleUrls: ['./new-job-service.component.scss']
})
export class NewJobServiceComponent implements OnInit {

  myId = 5;

  newJobService = {
    id: this.myId,
    title: '',
    description: ''
  };

  constructor(
    private jobService: JobServiceService
  ) { }

  ngOnInit(): void {
  }

  addJobService(): void{
    this.jobService.addJobService(this.newJobService);
  }

}
