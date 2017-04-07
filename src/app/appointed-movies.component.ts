import { Component } from '@angular/core';

import { SelectMovieComponent } from './select-movie.component';
import { MOVIE } from './movie';

@Component({
    selector: 'appointed-movies',
    template:``
})
export class AppointedMoviesComponent {
    selectedMovies: MOVIE[];

}