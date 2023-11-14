import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Scrum } from './models/scrum';
import { ScrumService } from './services/scrum.service';
import { ScrumDetailComponent } from './scrum-detail/scrum-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgFor, ScrumDetailComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ScrumService]
})
export class AppComponent {
  title = 'Liga de Campeones de la UEFA';
  scrums: Scrum[] = [];
  selectedScrum: Scrum = new Scrum;

  constructor(private scrumservice: ScrumService){}

  getScrums():void{
    this.scrumservice.getScrums().then(scrums => this.scrums = scrums);
  }

  ngOnInit():void{
    this.getScrums();
  }

  onSelect(scrum: Scrum): void{
    this.selectedScrum = scrum;
  }

}
