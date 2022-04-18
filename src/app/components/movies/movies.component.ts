import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

interface movie{
  original_title:string,
  poster_path:string,
}


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  popular:movie[] = [];

  ngOnInit(): void {
    this.apiService.getPopularMovies().subscribe(data=>{
      this.popular = data.results
      console.log(this.popular)
    }, err =>{
      console.log(err)
    })
  }
}
