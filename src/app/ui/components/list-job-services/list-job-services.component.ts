import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JobService } from 'src/app/data';
import { JobServiceService } from 'src/app/data/services/job-service.service';

@Component({
  selector: 'app-list-job-services',
  templateUrl: './list-job-services.component.html',
  styleUrls: ['./list-job-services.component.scss']
})
export class ListJobServicesComponent implements OnInit {

  constructor(private listJobService: JobServiceService) { }

  @Output() sendPosition = new EventEmitter<string>();

  myJobs: JobService[];

  ngOnInit(): void {
    this.myJobs = this.listJobService.getJobsService();
  }

  deleteJob(id): void {
    this.listJobService.deleteJobService(id);
  }

  getPosition(id): void {
    this.sendPosition.emit(id); //este dato viajará hacia el padre
    this.listJobService.editJobService(id);
  }

}
