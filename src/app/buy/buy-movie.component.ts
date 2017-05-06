import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from '../movie.service';
import { MOVIE } from '../movie';
import { ValidSeat } from '../seat-style/valid-seat.component';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'buy-movie',
    templateUrl: './buy-movie.component.html'
})
export class BuyMovieComponent implements OnInit {
    buymovie: MOVIE;
    lineNum: number[] = [1,2,3,4,5,6,7];
    rankNum: number[] = [1,2,3,4,5,6,7,9,10];
    seatNum: number[][] = [];
    selectedNum: number[][] = [];
    selected: boolean;
    constructor(
        private movieservice: MovieService,
        private route: ActivatedRoute,
        private location: Location
    ){}
    initSeats(){
        for(let i of this.lineNum){
            this.seatNum[i-1] = [0,0,0,0,0,0,0,];
        }
        this.selected = false; 
    }
    ngOnInit(): void{
        this.route.params
        .switchMap((params: Params) =>
        this.movieservice.getMovie(+params['id']))
        .subscribe(buymovie => this.buymovie = buymovie);
        this.initSeats();
    }
    selectseat(line: number,seat: number){
        this.selected = true;
        if(this.seatNum[line-1][seat-1] == 0){
            this.seatNum[line-1][seat-1] = 1;
            this.selectedNum.push([line,seat]);
        }
    }
    buy(){
        for(let l of this.lineNum){
            for(let r of this.rankNum){
                if(this.seatNum[l-1][r-1]==1){
                    this.seatNum[l-1][r-1]=2;
                }
            }
        }
    }
    goBack(): void{
        this.location.back();
    }
}