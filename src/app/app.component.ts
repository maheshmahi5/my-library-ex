import { Component } from '@angular/core';
import { Book } from './models/app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'exercise3';
  books:Book[] = [];
  book:Book;
  newtitle:string;
  newauthor:string;
  
  addtitle(event: any)
  {
    this.newtitle=event.target.value;
  }
  addauthor(event: any)
  {
    this.newauthor=event.target.value;
  }
  Addbook()
  {
    this.book={
    title :"",
    author : ""
    };
    this.book.title=this.newtitle;
    this.book.author=this.newauthor;
    this.books.push(this.book);

  }
  delete(data:number)
  {
    this.books.splice(data,1);
  }
}
