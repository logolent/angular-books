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

	bookForm: FormGroup;
	buttonName = 'Добавить книгу';

  	constructor(private fb: FormBuilder) {

	}

  	ngOnInit(): void {
		this.bookForm = this.fb.group({
			formName: ['', [
				Validators.required
			]],
			formAuthor: ['', [
				Validators.required
			]]
		});

		if (this.update) {
			this.bookForm.get('formName').setValue(this.book.name);
			this.bookForm.get('formAuthor').setValue(this.book.author);
			this.buttonName = 'Обновить книгу';
		}
	}

	get _name() {
		return this.bookForm.get('formName');
	}

	get _author() {
		return this.bookForm.get('formAuthor');
	}

	submitHandler(): void {
		const newBook = this.bookForm.value;

		if (newBook.formName.trim() && newBook.formAuthor.trim()) {
			if (this.update) {
				this.updateEvent.emit({name: newBook.formName, author: newBook.formAuthor});
			} else {
				this.addEvent.emit({name: newBook.formName, author: newBook.formAuthor});
			}
		}
	}
}
