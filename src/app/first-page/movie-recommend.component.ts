import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { MovieService } from '../movie.service';
import { MOVIE } from '../movie';

@Component({
    selector: 'movie-recommend',
    templateUrl:'./movie-recommend.component.html' 
})
export class MovieRecommendComponent implements OnInit {
    topMovies: MOVIE[];
    constructor(private movieService: MovieService){}
    getMovies(): void {
        this.movieService.getMovies().then(movies => this.topMovies = movies.slice(0,5));
    }
    ngOnInit(): void {
        this.getMovies();
    }
}