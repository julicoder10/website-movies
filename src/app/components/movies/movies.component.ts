import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/models/rated-movie';
import { PlayService } from 'src/app/services/play.service';
import { RatedMoviesService } from 'src/app/services/rated-movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies:movie[] = [];

  

  constructor(private http : RatedMoviesService, private playService: PlayService) { }

  ngOnInit(): void {
    this.http.getPopularMovies().subscribe(data=>{
      this.movies = data.results
    }, err =>{
      console.log(err)
    })
  }

  seeData(i : number){
    this.playService.movieData = this.movies[i];
    console.log(this.playService.movieData);
  }
  
}
