import { DeveloperModel } from './../model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'company'
})
export class CompanyPipe implements PipeTransform {
  // CHANGES ALL COMPANIES TO 'DANAHER'
  transform(developers: DeveloperModel[]): DeveloperModel[] {
    const results:DeveloperModel[] = [];

    developers.forEach((developer) => {
     if(developer.company != 'Danaher'){
       developer.company = 'Danaher';
       results.push(developer);
           }
   });
     return results;
  }
}
