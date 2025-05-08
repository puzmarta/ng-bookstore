import { Component } from '@angular/core';
import { Book } from '../../model/book';
import { Review } from '../../model/review';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ReviewComponent } from '../review/review.component';
import { NgFor } from '@angular/common';
import { CreateReviewComponent } from '../create-review/create-review.component';
import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'bs-book-details',
  standalone: true,
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
  imports: [RouterLink, ReviewComponent, NgFor, CreateReviewComponent]
})
export class BookDetailsComponent {

  book: Book | null = null;
  reviews: Review[] = [];

  constructor(
    private route: ActivatedRoute,
    private reviewsService: ReviewsService,
  ) {
    this.route.data.subscribe((data) => {
      this.book = data['book'];
      this.reviews = data['reviews'];
    });
  }

  reloadReviews(): void {
    const bookId = this.book?.id;
    if (bookId) {
      this.reviewsService.getReviewsForBook(bookId).subscribe((updatedReviews: Review[]) => {
        this.reviews = updatedReviews;
      });
    }
  }

}
