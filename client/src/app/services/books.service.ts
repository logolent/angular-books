import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class BooksService {
	constructor(private http: HttpClient) {

	}

	public getBooks(search: string = ''): Observable<BookModel[]> {
		return this.http.get<any>('http://localhost:3000/api/books').pipe(
			map(object => object.data)
		);
	}

	public getBook(id: string): Observable<BookModel> {
		return this.http.get<any>('http://localhost:3000/api/books/' + id).pipe(
			map(object => object.data)
		);
	}

	public addBook(body: BookModel): Observable<void> {
		return this.http.post<any>('http://localhost:3000/api/books/add/', body);
	}

	public deleteBook(id: string): Observable<void> {
		return this.http.delete<any>('http://localhost:3000/api/books/delete/' + id);
	}

	public updateBook(id: string, body: object): Observable<void> {
		return this.http.patch<any>('http://localhost:3000/api/books/edit/' + id, body);
	}
}
