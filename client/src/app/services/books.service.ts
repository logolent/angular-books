import { BookModel } from './../models/book.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class BooksService {

	apiUrl = environment.apiUrl;

	constructor(private http: HttpClient) {
	}

	public getBooks(search: string = ''): Observable<BookModel[]> {
		return this.http.get<any>(this.apiUrl + '/api/books').pipe(
			map(array => array.data.filter((object: BookModel) =>
				object.name.toLowerCase().includes(search.toLowerCase()) ||
				object.author.toLowerCase().includes(search.toLowerCase())
			))
		);
	}

	public getBook(id: string): Observable<BookModel> {
		return this.http.get<any>(this.apiUrl + '/api/books/' + id).pipe(
			map(object => object.data)
		);
	}

	public addBook(body: BookModel): Observable<void> {
		return this.http.post<any>(this.apiUrl + '/api/books/add/', body);
	}

	public deleteBook(id: string): Observable<void> {
		return this.http.delete<any>(this.apiUrl + '/api/books/delete/' + id);
	}

	public updateBook(id: string, body: object): Observable<void> {
		return this.http.patch<any>(this.apiUrl + '/api/books/edit/' + id, body);
	}
}
