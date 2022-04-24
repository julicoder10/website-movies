import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';



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
