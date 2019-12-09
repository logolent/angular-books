import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  	selector: 'app-book-card',
  	templateUrl: './book-card.component.html',
  	styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

	@Input()
	book: {name: string, author: string};

	@Output()
	delete = new EventEmitter<void>();

	constructor() { }

	onDelete(): void {
		this.delete.emit();
	}
}
