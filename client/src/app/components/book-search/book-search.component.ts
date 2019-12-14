import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  	selector: 'app-book-search',
  	templateUrl: './book-search.component.html',
  	styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent {

	@Output()
	filterChange = new EventEmitter<string>();

  	constructor() { }

	onSearchChange(event: any): void {
		this.filterChange.emit(event.target.value.trim());
	}
}
