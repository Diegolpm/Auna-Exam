import { Injectable } from '@angular/core';
import { JobService } from '../models/job-service.model';

const JobServiceLists = [
  {
    id: 1,
    title: 'Test',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 2,
    title: 'Chofer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 3,
    title: 'Bombero',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  constructor() { }

  getJobsService(){
    return JobServiceLists;
  }
  getOneServiceJob(id){
    return JobServiceLists.find(jobService => jobService.id === id);
  }

  addJobService(jobService: JobService){
    JobServiceLists.push(jobService);
  }

  editJobService(newJobServiceEdit){
    const index = JobServiceLists.findIndex(jobService => jobService.id === newJobServiceEdit.id);
    JobServiceLists[index] = newJobServiceEdit;
  }

  deleteJobService(id) {
    JobServiceLists.splice(id, 1);
  }
  
}
