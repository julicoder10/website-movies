import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchUrl:string = "https://api.themoviedb.org/3/search/movie?api_key=d9d88eea5faf7c8405d897fdf759347d&language=en-US&query=";

  constructor(private http : HttpClient) { }

  getSearch(x : string):Observable<any>{
    return this.http.get(this.searchUrl + x + '&page=1&include_adult=false');
  }

}
