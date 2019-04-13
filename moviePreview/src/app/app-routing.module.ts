import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {PopularMoviesComponent} from "./popular-movies/popular-movies.component";

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch: 'full'},
  { path: 'home', component: AppComponent},
  {path:'popularMovies',component:PopularMoviesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
