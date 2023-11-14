
import { Injectable } from '@angular/core';
import { Scrum} from '../models/scrum';
import { SCRUMS } from '../data/mock-scrums';

@Injectable({
  providedIn: 'root'
})
export class ScrumService {

  constructor() { }

  getScrums(): Promise<Scrum[]>{ 
    return Promise.resolve(SCRUMS);
  }

  getScrumsSlowly(): Promise<Scrum[]>{ 
     return new Promise(resolve => {
      setTimeout(() => resolve(this.getScrums()), 2000);
  });
}

}
