import { Component, OnInit } from '@angular/core';
import { PlayService } from '../services/play.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  movieDataX = {
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

  constructor(private playService : PlayService) { }

  ngOnInit(): void {

    this.movieDataX = this.playService.movieData;

  }

}
