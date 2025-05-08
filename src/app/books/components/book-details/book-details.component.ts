import { Component } from '@angular/core';
import { Book } from '../../model/book';
import { Review } from '../../model/review';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ReviewComponent } from '../review/review.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'bs-book-details',
  standalone: true,
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
  imports: [RouterLink, ReviewComponent, NgFor]
})
export class BookDetailsComponent {

  book: Book | null = null;
  reviews: Review[] = [];

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((data) => {
      this.book = data['book'];
      this.reviews = data['reviews'];
    });
  }

}
