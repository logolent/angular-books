import { Component } from '@angular/core';
/* import { BookModel } from './models/book.model'; */

/* const BOOKS: string = 'books'; */

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	/* books: BookModel[];

	filter: string = '';

	constructor() {
		this.books = JSON.parse(localStorage.getItem('books')) || [];
	}

	addBook(book: BookModel): void {
		this.books.unshift(book);
		localStorage.setItem(BOOKS, JSON.stringify(this.books));
	}

	onFilterChange(value: string): void {
		this.filter = value;
	}

	deleteBook(id: number): void {
		this.books.splice(id, 1);
		localStorage.setItem(BOOKS, JSON.stringify(this.books));
	} */
}
