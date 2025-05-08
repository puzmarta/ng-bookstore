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

  getReviewsForBook(bookId: string): Observable<any[]> {
    return this.http.get<any[]>(`${reviewsApiPrefix}?forBook=${bookId}`);
  }


}
