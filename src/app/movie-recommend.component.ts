import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { MovieService } from './movie.service';
import { MOVIE } from './movie';

@Component({
    selector: 'movie-recommend',
    template: `<h2>电影推荐</h2>
               <div *ngFor="let movie of topMovies">
                 <div>
                   <img [src]="movie.ImgUrl" width=100 height=150 >
                   <div>
                     片名：{{movie.MovieName}}<br/>
                     导演：{{movie.MovieDirector}}<br/>
                     主演：{{movie.MovieActors[0]}}、{{movie.MovieActors[1]}}、{{movie.MovieActors[2]}}
                   </div>
                 </div>
               </div>
              `
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