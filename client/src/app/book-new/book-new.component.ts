import { BookModel } from './../models/book.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {

	constructor(private router: Router,
				private bookService: BooksService) { }

  	ngOnInit() {
	}

	addBook(book: BookModel): void {
		console.log('add event');
		this.bookService.addBook(book).subscribe(() => {
			this.router.navigate(['/books']);
		});
	}

}
