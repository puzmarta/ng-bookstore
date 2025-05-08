import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReviewsService } from '../../services/reviews.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'bs-create-review',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-review.component.html',
  styleUrl: './create-review.component.scss'
})
export class CreateReviewComponent {

  @Output() reviewAdded = new EventEmitter<void>();

  reviewForm!: FormGroup;
  bookId!: string;

  constructor(
    private fb: FormBuilder,
    private reviewsService: ReviewsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('bookId')!;
    this.initForm();
  }

  private initForm(): void {
    this.reviewForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
      rate: [null, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  submitReview(): void {
    if (this.reviewForm.valid) {
      const review = { ...this.reviewForm.value, forBook: this.bookId };
      this.reviewsService.createReview(review).subscribe(() => {
        this.reviewForm.reset();
        this.reviewAdded.emit();
      });
    }
  }


}
