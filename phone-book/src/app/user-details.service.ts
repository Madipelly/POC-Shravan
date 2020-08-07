import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  resp: Observable<object>;


  constructor(private http: HttpClient) { }

  public getUserDeatails(): Observable<object>
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users/")
  }

}

