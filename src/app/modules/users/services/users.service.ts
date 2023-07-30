import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError, map } from 'rxjs';
import { User, UserData } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(params: { searchText: string; limit: number }): Observable<User[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.set('q', params.searchText).set('limit', params.limit.toString());

    return this.http
      .get<UserData>('https://dummyjson.com/users/search', { params: queryParams })
      .pipe(
        map((data) => data.users),
        catchError((error) => {
          console.error(error);
          return throwError(() => new Error(error));
        })
      );
  }
}
