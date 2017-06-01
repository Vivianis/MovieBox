import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { MOVIE } from './movie';
import { SEAT } from './seat';

@Injectable()
export class MovieService {
    private moviesUrl = 'http://localhost:3002/movies';

    constructor(private http: Http) { }

    getMovies(): Promise<MOVIE[]> {
        return this.http.get(this.moviesUrl)
            .toPromise()
            .then(response => response.json() as MOVIE[])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    getMovie(id: number): Promise<MOVIE> {
        const url = `${this.moviesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as MOVIE)
            .catch(this.handleError);
    }
    storeDegree(movieID: number, degree: number): void {
        const url = `${this.moviesUrl}/${movieID}/degree/${degree}`;
        this.http.post(url, {})
            .toPromise()
            .then(() => { })
            .catch(this.handleError);
    }
    storeSeat(seatID: number): void {
        const url = `${this.moviesUrl}/seat/${seatID}`;
        this.http.post(url, {})
            .toPromise()
            .then(() => { })
            .catch(this.handleError);
    }
    getSeat(): Promise<SEAT[]> {
        const url = `http://localhost:3002/seats`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as SEAT[])
            .catch(this.handleError);
    }
}