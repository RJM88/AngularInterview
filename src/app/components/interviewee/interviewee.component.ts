import { DataService } from './../../data.service';
import { DeveloperModel, FoodModel } from './../../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviewee',
  templateUrl: './interviewee.component.html',
  styleUrls: ['./interviewee.component.scss']
})
export class IntervieweeComponent implements OnInit {

  constructor(private dataServ:DataService) {}
  developers: DeveloperModel[] = [];
  foods: FoodModel[] = [];
  colors: string[] = ['red', 'yellow', 'blue', 'green'];
  favoriteColor = 'red';

  ngOnInit(): void {
  this.developers = this.dataServ.indexDeveloper();
  this.foods = this.dataServ.indexFood();

  }

}
