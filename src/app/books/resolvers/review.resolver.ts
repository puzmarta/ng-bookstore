import { inject } from '@angular/core';
import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {Review} from '../model/review';
import { ReviewsService } from '../services/reviews.service';


export const reviewsResolver: ResolveFn<Review[]> = 
  (route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) => {
    return inject(ReviewsService).getReviewsForBook(route.params['bookId']);
  };




