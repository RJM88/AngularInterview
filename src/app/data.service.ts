import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { DeveloperModel, FoodModel } from './model';

@Injectable({ providedIn: 'root'})
export class DataService {
  private arrayDeveloper: DeveloperModel[] = [
    {
      id: 1,
      name: 'ryan',
      description: 'loves traveling',
      company: 'FSDATA',
      favoriteColor: 'red',
      age: 33,
    },
    {
      id: 2,
      name: 'tim',
      description: 'best mountain biker',
      company: 'FSDATA',
      favoriteColor: 'red',
      age: 31,
    },
    {
      id: 3,
      name: 'aaron',
      description: 'hacker',
      company: 'FSDATA',
      favoriteColor: 'red',
      age: 30,
    },
    {
      id: 4,
      name: 'brian',
      description: 'likes eagles',
      company: 'TROJANUV',
      favoriteColor: 'yellow',
      age: 80,
    },
    {
      id: 5,
      name: 'nick',
      description: 'frontend developer',
      company: 'AQI',
      favoriteColor: 'green',
      age: 32,
    },
    {
      id: 6,
      name: 'trevor',
      description: 'backend developer',
      company: 'AQI',
      favoriteColor: 'blue',
      age: 26,
    },
  ];

  private arrayFood: FoodModel[] = [
    {
      developerId: 6,
      name: 'vegean food',
    },
    {
      developerId: 5,
      name: 'pizza',
    },
    {
      developerId: 4,
      name: 'burger',
    },
    {
      developerId: 3,
      name: 'wings',
    },
    {
      developerId: 2,
      name: 'pasta',
    },
    {
      developerId: 1,
      name: 'tacos',
    },
  ];

  get getDevelopersObservable(): Observable<Array<DeveloperModel>> {
    return of(this.arrayDeveloper);
  }

  get getFavoriteFoodsObservable(): Observable<Array<FoodModel>> {
    return of(this.arrayFood);
  }

  indexDeveloper(){
    return[...this.arrayDeveloper]
  }

  indexFood(){
    return[...this.arrayFood]
  }
}
