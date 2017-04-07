import { Component } from '@angular/core';

import { MovieService } from './movie.service';
import { MOVIE } from './movie';
import { OnInit } from '@angular/core';

@Component({
    selector: 'select-movie',
    templateUrl: './select-movie.component.html' 
})
export class SelectMovieComponent implements OnInit {
    movies: MOVIE[];
    selectedMovies: MOVIE[];
    constructor(private movieService: MovieService){}
    getMovies(): void {
        this.movieService.getMovies().then(movies => this.movies = movies)
    }
    ngOnInit(){
        this.getMovies();
    }
    selectMovies(moviestyle:string,movietime:string): void{
        for (var i=0;this.movies[i];i++){
            if (this.movies[i].MovieStyle=moviestyle){
                if((movietime='2015-2018')&&(this.movies[i].TimeNum<=2018)&&this.movies[i].TimeNum>=2015){
                    this.selectedMovies.push(this.movies[i]);
                }
            }
        }
    }
}