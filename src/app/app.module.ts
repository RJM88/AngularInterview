import { ColorPipe } from './pipes/color.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { CompanyPipe } from './pipes/company.pipe';
import {IntervieweeComponent} from './components/interviewee/interviewee.component'


@NgModule({
  declarations: [AppComponent, IntervieweeComponent, ColorPipe, CompanyPipe],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  providers: [DataService],
})
export class AppModule {}
