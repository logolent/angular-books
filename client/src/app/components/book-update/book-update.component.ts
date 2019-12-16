import { Component, OnInit, OnDestroy } from '@angular/core';
import { Unsubscribable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { switchMap } from 'rxjs/operators';

@Component({
  	selector: 'book-update',
  	templateUrl: './book-update.component.html'
})
export class BookUpdateComponent implements OnInit, OnDestroy {

	book: BookModel;
	private subscription: Unsubscribable;

	constructor(private bookService: BooksService,
				private route: ActivatedRoute) { }

	ngOnInit():void {
		this.subscription = this.route.params.pipe(
			switchMap(params => this.bookService.getBook(params.id))
		).subscribe(book => this.book = book);
	}

	ngOnDestroy():void {
		this.subscription.unsubscribe();
	}

}
