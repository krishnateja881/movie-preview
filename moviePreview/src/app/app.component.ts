import {Component, OnInit} from '@angular/core';
import {MovieService} from "./movieService";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'Bar Chart Example in Angular 4';
  constructor(private movieService:MovieService,private fb: FormBuilder){}
  countryForm: FormGroup;
  countries = ['Day', 'Week']
  // ADD CHART OPTIONS.
  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  labels =  [];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: 'Popular Movies',
      data: []
    },

  ];

  // CHART COLOR.
  colors = [
    { // 2nd Year.
      backgroundColor: 'rgba(0, 255, 196, 0.8)'
    }
  ]

  // CHART CLICK EVENT. vote_average, title
  onChartClick(event) {
    console.log(event);
  }

  ngOnInit(): void {
    this.countryForm = this.fb.group({
      countryControl: ['Day']
    });
    this.movieService.trandingMovies(1).subscribe((value)=>{
      console.log(value.results)
      value.results.forEach((value)=>{
        this.labels.push(value.title)
        this.chartData[0].data.push(value.vote_average)
      })
    })
  }
  onChangeEvent(value){
    console.log("--->Value",value);
  }

  populateTrendingMovies(timeFormat){

  }
}
