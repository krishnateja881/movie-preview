import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class MovieService {
  constructor(private http:HttpClient){}
  APIKey="4b10cf2f8e6ed1fcb506bd3929ecee40";
  popularMovies(page):Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key="+this.APIKey+"&language=en-US&page="+page)
  }
  trandingMovies(timeFormat){
    return this.http.get("https://api.themoviedb.org/3/trending/movie/"+timeFormat+"?api_key="+this.APIKey+"&language=en-US&page="+1)

  }
}
