import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  	selector: 'book-search',
  	templateUrl: './book-search.component.html',
  	styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent {

	search = '';

  	constructor(
		private router: Router
	) { }

	onSubmit(): void {
		this.search = this.search.trim();
		if (this.search === '') {
			this.router.navigate(['/books']);
		} else {
			this.router.navigate(['/books'], {
				queryParams: {
					search: this.search
				}
			});
		}
	}
}
