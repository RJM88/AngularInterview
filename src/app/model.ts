export interface DeveloperModel {
  id: number;
  name: string;
  description: string;
  company: string;
  favoriteColor: string;
  age: number;
}
export interface FoodModel {
  developerId: number;
  name: string;
}

export interface DeveloperWithFoodModel {
  id: number;
  name: string;
  description: string;
  company: string;
  favoriteColor: string;
  age: number;
  foodName: string;
}
