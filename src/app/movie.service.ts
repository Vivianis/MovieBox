import { Injectable } from '@angular/core';

import { MOVIE } from './movie';
import { MOVIES } from './monk-movies';

@Injectable()
export class MovieService {
    getMovies(): Promise<MOVIE[]> {
        return Promise.resolve(MOVIES);
    }
}