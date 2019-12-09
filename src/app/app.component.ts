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
		this.books = [
			{'name': 'Темные начала',           'author': 'Филип Пулман'},
    		{'name': 'По ком звонит колокол',   'author': 'Эрнест Хемингуэй'},
    		{'name': 'Ким',                     'author': 'Редьярд Киплинг'},
    		{'name': 'Листья травы',            'author': 'Уолт Уитмен'},
    		{'name': 'Король Лир',              'author': 'Уильям Шекспир'},
    		{'name': 'Широкое Саргассово море', 'author': 'Джин Рис'},
    		{'name': 'Свет в августе',          'author': 'Уильям Фолкнер'},
    		{'name': 'Властелин колец',         'author': 'Джон Рональд Руэл Толкин'},
    		{'name': 'И пришло разрушение',     'author': 'Чинуа Ачебе'},
    		{'name': 'На маяк',                 'author': 'Вирджиния Вулф'}
		]
	}

	addBook(book: {name: string, author: string}): void {
		this.books.unshift(book);
	}

	onFilterChange(value: string): void {
		this.filter = value;
	}

	deleteBook(id: number): void {
		this.books.splice(id, 1);
	}
}
