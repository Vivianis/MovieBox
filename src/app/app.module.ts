import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 
import { AppComponent }  from './app.component';
import { MovieService } from './movie.service';
import { SelectMovieComponent } from './select-movie.component';
import { MovieRecommendComponent } from './movie-recommend.component';
import { AppointedMoviesComponent } from './appointed-movies.component';

RouterModule.forRoot([
  {
    path:'appointed',
    component: AppointedMoviesComponent
  } 
])
@NgModule({
  imports:      [ BrowserModule,
                  FormsModule 
                ],
  declarations: [ AppComponent,
                  SelectMovieComponent,
                  MovieRecommendComponent,
                  AppointedMoviesComponent
                ],
  bootstrap:    [ AppComponent ],
  providers:    [ MovieService ]
})
export class AppModule { }
