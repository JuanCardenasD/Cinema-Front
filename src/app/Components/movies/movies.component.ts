import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

    /**
   *
   */
    constructor(public api: ApiService) {
    
    }
    ngOnInit(): void {
      this.api.Get("Movies");
    }
}
