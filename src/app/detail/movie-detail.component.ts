import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from '../movie.service';
import { MOVIE } from '../movie';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'movie-detail',
    templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
    movie: MOVIE;
    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute,
        private location: Location
    ){}
    ngOnInit(): void{
        this.route.params
        .switchMap((params: Params) =>
        this.movieService.getMovie(+params['id']))
        .subscribe(movie => this.movie = movie);
        
    }
    support(): void{
        this.movieService.storeDegree(this.movie.id, this.movie.love_degree+1);
        alert("点赞成功！");
    }
    goBack(): void {
        this.location.back();
    }
}