import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

interface movie{
  adult: boolean,
  backdrop_path: string,
  id: number,
  media_type: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: number,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}

interface genre{
  id:number,
  name:string,
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imagen = {
    imgSrc : 'https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg'
  }


  genres:genre[] = [];
  startIndex:number = 0
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.genreCall().subscribe(data => {
      this.genres = data.genres;
    }, err => {
      console.log(err)
    })
  }
}
