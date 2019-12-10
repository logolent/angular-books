import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Book } from '../../interfaces/book.interface';

@Component({
  	selector: 'app-book-card',
  	templateUrl: './book-card.component.html',
  	styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

	@Input()
	book: Book;

	@Output()
	delete = new EventEmitter<void>();

	constructor() { }

	onDelete(): void {
		this.delete.emit();
	}
}
