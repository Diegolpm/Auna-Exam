import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobServiceComponent } from './ui/components/job-service/job-service.component';
import { ListJobServicesComponent } from './ui/components/list-job-services/list-job-services.component';
import { HeaderComponent } from './ui/components/shared/header/header.component';
import { FooterComponent } from './ui/components/shared/footer/footer.component';
import { NewJobServiceComponent } from './ui/components/new-job-service/new-job-service.component';

@NgModule({
  declarations: [
    AppComponent,
    JobServiceComponent,
    ListJobServicesComponent,
    HeaderComponent,
    FooterComponent,
    NewJobServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
