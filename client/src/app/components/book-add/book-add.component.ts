import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookModel } from '../../models/book.model';

@Component({
  	selector: 'app-book-add',
  	templateUrl: './book-add.component.html',
  	styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {

	addBookForm: FormGroup;
	name: string;
	author: string;

	@Output()
	add = new EventEmitter<BookModel>();

  	constructor(private fb: FormBuilder) { }

  	ngOnInit(): void {
		this.addBookForm = this.fb.group({
			formName: ['', [
				Validators.required
			]],
			formAuthor: ['', [
				Validators.required
			]]
		});
  	}

	get _name() {
		return this.addBookForm.get('formName');
	}

	get _author() {
		return this.addBookForm.get('formAuthor');
	}

	submitHandler(): void {
		const newBook = this.addBookForm.value;

		if (newBook.formName.trim() && newBook.formAuthor.trim()) {
			/* this.add.emit({name: newBook.formName, author: newBook.formAuthor}); */

			this._name.setValue('');
			this._author.setValue('');
		}
	}
}
