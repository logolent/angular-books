import { Component } from '@angular/core';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	books: {name: string, author: string}[];

	filter: string = '';

	constructor() {
		this.books = JSON.parse(localStorage.getItem('books')) || [];
	}

	addBook(book: {name: string, author: string}): void {
		this.books.unshift(book);
		localStorage.setItem('books', JSON.stringify(this.books));
	}

	onFilterChange(value: string): void {
		this.filter = value;
	}

	deleteBook(id: number): void {
		this.books.splice(id, 1);
		localStorage.setItem('books', JSON.stringify(this.books));
	}
}
