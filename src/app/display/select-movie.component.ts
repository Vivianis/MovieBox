import { Component } from '@angular/core';

import { MovieService } from '../movie.service';

import { MOVIE } from '../movie';
import { OnInit } from '@angular/core';

@Component({
    selector: 'select-movie',
    templateUrl: './select-movie.component.html' 
})
export class SelectMovieComponent implements OnInit {
    movies: MOVIE[];
    selectedStyle: MOVIE[] =[];
    selectedTime: MOVIE[] =[];
    selectedMovies: MOVIE[] =[];
    constructor(private movieService: MovieService){}
    getMovies(): void {
        this.movieService.getMovies().then(movies => {this.movies = movies; this.selectedMovies = movies })
    }
    ngOnInit(){
        this.getMovies()
    }
    selectMovies(moviestyle:string,movietime:string): void{
        if(moviestyle=='any'){
            this.selectedStyle=this.movies;
        }
        else{
            for(let selectstyle of this.movies){
                if(selectstyle.movie_style==moviestyle){
                    this.selectedStyle.push(selectstyle);              
                }
            }
        }
        if(movietime=='any'){
            this.selectedTime=this.selectedStyle;
        }
        else{
            for(let selecttime of this.selectedStyle){
                if((movietime=='1950-2000')&&(selecttime.show_time<'2000-01-01')&&(selecttime.show_time>='1950=01=01')){
                    this.selectedTime.push(selecttime);
                }
                else if((movietime=='2000-2010')&&(selecttime.show_time<'2010-01-01')&&(selecttime.show_time>='2000-01-01')){
                    this.selectedTime.push(selecttime);
                }
                else if((movietime=='2010-2015')&&(selecttime.show_time<'2015-01-01')&&(selecttime.show_time>='2010-01-01')){
                    this.selectedTime.push(selecttime);
                }
                else if((movietime=='2015-2018')&&(selecttime.show_time<'2018-01-01')&&(selecttime.show_time>='2015-01-01')){
                    this.selectedTime.push(selecttime);
                }
            }
        }
        this.selectedMovies=this.selectedTime;     
    }
}