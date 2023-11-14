import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Scrum } from '../models/scrum';

@Component({
  selector: 'app-scrum-detail',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './scrum-detail.component.html',
  styleUrl: './scrum-detail.component.css'
})
export class ScrumDetailComponent {
  @Input()
  scrum: Scrum = new Scrum;
}
