import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListJobServicesComponent } from './list-job-services/list-job-services.component';
import { NewJobServiceComponent } from './new-job-service/new-job-service.component';
import { PagesModule } from '../pages/pages.module';
import { FormsModule } from '@angular/forms';
import { EditJobComponent } from './edit-job/edit-job.component';

@NgModule({
  declarations: [
    ListJobServicesComponent,
    NewJobServiceComponent,
    EditJobComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ListJobServicesComponent,
    NewJobServiceComponent,
    EditJobComponent
  ]
})
export class ComponentsModule { }
