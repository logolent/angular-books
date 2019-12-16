import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  	selector: 'book-details-view',
  	templateUrl: './book-details-view.component.html',
  	styleUrls: ['./book-details-view.component.scss']
})
export class BookDetailsViewComponent implements OnInit {

	@Input()
	book: BookModel;

	@Input()
	update: boolean;

	@Output()
	updateEvent = new EventEmitter<BookModel>();

	@Output()
	addEvent = new EventEmitter<BookModel>();

	updateBookForm: FormGroup;
	buttonName = this.update? 'Обновить книгу' : 'Добавить кингу';

  	constructor(private fb: FormBuilder) {

	}

  	ngOnInit(): void {
		this.updateBookForm = this.fb.group({
			formName: ['', [
				Validators.required
			]],
			formAuthor: ['', [
				Validators.required
			]]
		});
  	}

	submitHandler(): void {
		const newBook = this.updateBookForm.value;

		if (newBook.formName.trim() && newBook.formAuthor.trim()) {
			console.log('some in details view')
			if (this.update) {
				this.updateEvent.emit({name: newBook.formName, author: newBook.formAuthor});
			} else {
				this.addEvent.emit({name: newBook.formName, author: newBook.formAuthor});
			}
		}
	}


}
