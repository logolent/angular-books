import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterBook',
	pure: false
})
export class BookFilterPipe implements PipeTransform {
	transform(books: {name: string, author: string}[], search: string): {}[] {
		return books.filter((item: {name: string, author: string}) => {
			return (
				item.name.toLowerCase().includes(search.toLowerCase())
				|| item.author.toLowerCase().includes(search.toLowerCase())
			)
		})
	}
}
