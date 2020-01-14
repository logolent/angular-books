import { Component, Input, Output, EventEmitter} from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  	selector: 'book-card',
  	templateUrl: './book-card.component.html',
  	styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

	@Input()
	book: BookModel;

	@Output()
	delete = new EventEmitter<void>();

	constructor() { }

	onDelete(): void {
		this.delete.emit();
	}
}
