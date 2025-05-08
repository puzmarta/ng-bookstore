import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  @Input() review!: {  id: number;
    forBook: number;
    title: string;
    description: string;
    rate: number;};
}
