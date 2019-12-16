import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookViewComponent } from './components/book-view/book-view.component';

import { BookFilterPipe } from './pipes/book-filter.pipe';

const routes: Routes = [
	{path: 'books/new', component: BookAddComponent},
	{path: 'books/:id', component: BookViewComponent},
	{path: 'books', component: BooksListComponent},
	{path: '**', redirectTo: '/books'}
]

@NgModule({
  declarations: [
	AppComponent,
	HeaderComponent,
	BookAddComponent,
	BookSearchComponent,
	BookCardComponent,
	BooksListComponent,
	BookViewComponent,
	BookFilterPipe,
  ],
  imports: [
	BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
	RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
