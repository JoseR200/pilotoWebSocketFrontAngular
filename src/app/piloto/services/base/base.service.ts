import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  localLink = 'http://localhost:3000/api/';

  basePath = this.localLink;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(public http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.error.message));
  }

  create(item: any): Observable<T> {
    return this.http.post<T>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getById(id: any): Observable<T> {
    return this.http.get<T>(`${this.basePath}?id=${id}`,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getObject(): Observable<T> {
    return this.http.get<T>(`${this.basePath}/myObject`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getAll(): Observable<T> {
    return this.http.get<T>(`${this.basePath}/list`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getMyAll(): Observable<T> {
    return this.http.get<T>(`${this.basePath}/myList`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  update(id: any, item: any): Observable<T> {
    return this.http.put<T>(`${this.basePath}?idConsultation=${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
