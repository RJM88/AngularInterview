import { DeveloperModel } from './../model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(developers: DeveloperModel[], colorPicked: string): DeveloperModel[] {
   const results:DeveloperModel[] = [];

   developers.forEach((developer) => {
    if(developer.favoriteColor === colorPicked){
      results.push(developer)
    }
  });
    return results;
  }
}
