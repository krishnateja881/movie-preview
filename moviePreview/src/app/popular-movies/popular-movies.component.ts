import { Component, OnInit } from '@angular/core';
import {MovieService} from "../movieService";

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.sass']
})
export class PopularMoviesComponent implements OnInit {

  constructor(private movieService:MovieService) { }
  private moviesList:any;
  private page=1;
  totalCount:any;
  totalPages:any;
  ngOnInit() {
    this.populateMoviesList(this.page)
  }
  populateMoviesList(page){
    this.movieService.popularMovies(page).subscribe((movies)=>{
      this.moviesList=movies.results
      this.totalCount=movies.total_results
      this.totalPages=movies.total_pages;
    })
  }

  /**
   * To move next page
   */
  onNext = (): void => {
    this.page++;
    this.populateMoviesList(this.page);
  };


  /**
   * To move previous page
   */
  onPrev = (): void => {
    this.page--;
    this.populateMoviesList(this.page);

  }
}
