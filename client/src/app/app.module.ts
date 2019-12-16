import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
//import { BookAddComponent } from './components/book-add/book-add.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookUpdateComponent } from './components/book-update/book-update.component';
import { BookDetailsViewComponent } from './components/book-details-view/book-details-view.component';
import { BookNewComponent } from './components/book-new/book-new.component';

import { BookFilterPipe } from './pipes/book-filter.pipe';

const routes: Routes = [
	{path: 'books/new', component: BookNewComponent},
	{path: 'books/:id', component: BookUpdateComponent},
	{path: 'books', component: BooksListComponent},
	{path: '**', redirectTo: '/books'}
]

@NgModule({
  declarations: [
	AppComponent,
	HeaderComponent,
	//BookAddComponent,
	BookSearchComponent,
	BookCardComponent,
	BooksListComponent,
	BookUpdateComponent,
	BookDetailsViewComponent,
	BookFilterPipe,
	BookNewComponent
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
