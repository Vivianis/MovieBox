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
    selectedStyle: MOVIE[];
    selectedMovies: MOVIE[];
    constructor(private movieService: MovieService){}
    getMovies(): void {
        this.movieService.getMovies().then(movies => this.movies = movies)
    }
    ngOnInit(){
        this.getMovies();
    }
    selectMovies(moviestyle:string,movietime:string): void{
        if(moviestyle=='any'){
            this.selectedStyle=this.movies;
        }
        else{
            for(let movie of this.movies){
                if(movie.MovieStyle==moviestyle){
                    this.selectedStyle.push(movie);              
                }
            }
        }
        if(movietime=='any'){
            this.selectedMovies=this.selectedStyle;
        }
        else{
            for(let movie of this.selectedStyle){
                if((movietime=='1950-2000')&&(movie.ShowTime<'2000-01-01')&&(movie.ShowTime>='1950=01=01')){
                    this.selectedMovies.push(movie);
                }
                else if((movietime=='2000-2010')&&(movie.ShowTime<'2010-01-01')&&(movie.ShowTime>='2000-01-01')){
                    this.selectedMovies.push(movie);
                }
                else if((movietime=='2010-2015')&&(movie.ShowTime<'2015-01-01')&&(movie.ShowTime>='2010-01-01')){
                    this.selectedMovies.push(movie);
                }
                else if((movietime=='2015-2018')&&(movie.ShowTime<'2018-01-01')&&(movie.ShowTime>='2015-01-01')){
                    this.selectedMovies.push(movie);
                }
            }
        }
        
    }
}