import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BookCardComponent } from './components/book-card/book-card.component';

import { BookFilterPipe } from './pipes/book-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
	BookAddComponent,
	BookSearchComponent,
	BookCardComponent,

	BookFilterPipe
  ],
  imports: [
	BrowserModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
