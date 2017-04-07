import { Component } from '@angular/core';

import { MovieService } from './movie.service';
import { SelectMovieComponent } from './select-movie.component';
import { MovieRecommendComponent } from './movie-recommend.component';

@Component({
  selector: 'my-app',
  template: `<h1>Movie Store</h1>
             <select-movie></select-movie>
             <movie-recommend></movie-recommend>
            `
})
export class AppComponent  {

}
