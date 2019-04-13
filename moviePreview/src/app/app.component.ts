import {Component, OnInit} from '@angular/core';
import {MovieService} from "./movieService";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'Bar Chart Example in Angular 4';
  countryForm: FormGroup;
  backdropPath:any;
  timeFormat = ['Day', 'Week']
  chartOptions = {responsive: true}
  labels =  [];
  chartData = [{label: 'Popular Movies', data: []},];
  colors = [{ backgroundColor: 'rgba(0, 255, 196, 0.8)'}]

  constructor(private movieService:MovieService,private fb: FormBuilder,public router: Router){
  }


  ngOnInit(): void {
    this.countryForm = this.fb.group({
      countryControl: ['Day']
    });
    this.populateTrendingMovies('day')
  }
  onChangeEvent(value){
    this.populateTrendingMovies(value);
  }

  populateTrendingMovies(timeFormat){
    this.movieService.trandingMovies(timeFormat).subscribe((value)=>{
      if(value){
        this.labels=[];
        this.chartData[0].data=[];
        this.backdropPath=value['results'][0].backdrop_path;
        value['results'].forEach((value)=>{
          this.labels.push(value.title)
          this.chartData[0].data.push(value.vote_average)
        })
      }

    })
  }
  navigateToTrandingMovie(){
    this.router.navigate(['/home'])
  }
  navigateToPopularMovies(){
    this.router.navigate(['/popularMovies'])

  }
}
