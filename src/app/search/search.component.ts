import { Component, OnInit } from '@angular/core';
import { movie } from '../models/rated-movie';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search:string = '';

  movies:movie[] = []

  constructor(private searchService : SearchService) { }

  ngOnInit(): void {}

  searchMovie(x:string){
    this.searchService.getSearch(x).subscribe(data =>{
       this.movies  = data.results;
    }, err =>{
      console.log(err)
    })
  }
}
