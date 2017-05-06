import { Injectable } from '@angular/core';

import { MOVIE } from './movie';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {
    getMovies(): Promise<MOVIE[]> {
        return Promise.resolve(MOVIES);
    }
    getMovie(Id:number): Promise<MOVIE> {
        return this.getMovies().then(movies => movies.find(movie => movie.Id === Id));
    }
}