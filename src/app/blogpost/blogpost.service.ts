import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Blogpost} from './blogpost';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  ServerUrl = 'http://localhost/dev/blog-app/';
  errorData = {};

  constructor(private http: HttpClient) { }

  getBlogs() {
    return this.http.get<Blogpost>(this.ServerUrl + 'api/blogs').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedBlogs() {
    return this.http.get<Blogpost>(this.ServerUrl + 'api/featured_blogs').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
