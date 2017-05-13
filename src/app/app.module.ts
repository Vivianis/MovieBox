import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-page/log-in.component';
import { SelectMovieComponent } from './display/select-movie.component';
import { MovieRecommendComponent } from './first-page/movie-recommend.component';
import { MovieDetailComponent } from './detail/movie-detail.component';
import { BuyMovieComponent } from './buy/buy-movie.component';
import { NoPageComponent } from './wrong-page/no-page.component';
import { MovieService } from './movie.service';

import { ValidSeat } from './seat-style/valid-seat.component';
import { SelectedSeat } from './seat-style/selected-seat.component';
import { InvalidSeat } from './seat-style/invalid-seat.component';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  declarations: [AppComponent,
    LogInComponent,
    SelectMovieComponent,
    MovieRecommendComponent,
    MovieDetailComponent,
    BuyMovieComponent,
    NoPageComponent,
    ValidSeat,
    SelectedSeat,
    InvalidSeat
  ],
  bootstrap: [AppComponent],
  providers: [MovieService]
})
export class AppModule { }
