import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'bs-edit-book',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss'
})
export class EditBookComponent {
  bookForm!: FormGroup;
  originalBook: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private booksService: BooksService,
    private router: Router
  ) {}

ngOnInit(): void {
    this.route.data.subscribe(data => {
        this.originalBook = data['book'];
        this.initForm(this.originalBook);
    });
}

private initForm(book: any): void {
    this.bookForm = this.fb.group({
        title: [book.title, [Validators.required, Validators.maxLength(50)]],
        author: [book.author, [Validators.required, Validators.maxLength(50)]],
        year: [book.year, [Validators.required, Validators.min(1000), Validators.max(2023)]],
        description: [book.description, [Validators.maxLength(1000)]]
    });
}

save(): void {
  if (this.bookForm.valid && this.bookForm.dirty) {
    const updatedBook = { ...this.originalBook, ...this.bookForm.value };
    this.booksService.updateBook(updatedBook).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}

cancel(): void {
  this.router.navigate(['/books']);
}

}
