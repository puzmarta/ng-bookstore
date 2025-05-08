import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../model/review';

const reviewsApiPrefix = '/api/reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private readonly http: HttpClient) { }

  getReviewsForBook(bookId: number): Observable<any[]> {
    return this.http.get<any[]>(`${reviewsApiPrefix}?forBook=${bookId}`);
  }

  createReview(review: any): Observable<any> {
    return this.http.post<any>(reviewsApiPrefix, review);
  }


}
