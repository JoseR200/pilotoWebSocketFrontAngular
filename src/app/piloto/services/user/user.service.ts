import { Injectable } from '@angular/core';
import {BaseService} from "../base/base.service";
import {User} from "../../model/user";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = this.basePath + 'users';
  }

  createUser(item: any): Observable<User> {
    return this.http.post<User>(this.basePath + '/register', JSON.stringify(item), this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
