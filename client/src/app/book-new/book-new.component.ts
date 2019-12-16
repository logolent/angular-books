import { BookModel } from './../models/book.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  	selector: 'app-book-new',
  	templateUrl: './book-new.component.html',
  	styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent {

	constructor(private router: Router,
				private bookService: BooksService) { }

	addBook(book: BookModel): void {
		this.bookService.addBook(book).subscribe(() => {
			this.router.navigate(['/books']);
		});
	}

}
