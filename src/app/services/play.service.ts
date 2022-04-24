import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlayService {

  movieData = {
    adult: false,
    backdrop_path: '',
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: 0,
    title: '',
    vote_average: 0,
    vote_count: 0,
  }

  constructor() { }

  
  
}
