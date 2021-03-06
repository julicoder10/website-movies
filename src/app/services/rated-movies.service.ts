import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatedMoviesService {

 popularMoviesUrl:string = 'https://api.themoviedb.org/3/movie/popular?api_key=d9d88eea5faf7c8405d897fdf759347d&language=en-US&page=1';

  constructor(private http : HttpClient) { }



  getPopularMovies():Observable<any>{
    return this.http.get(this.popularMoviesUrl)
  }
}
