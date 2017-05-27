import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-page/log-in.component';
import { SelectMovieComponent } from './display/select-movie.component';
import { MovieRecommendComponent } from './first-page/movie-recommend.component';
import { MovieDetailComponent } from './detail/movie-detail.component';
import { BuyMovieComponent } from './buy/buy-movie.component';
import { NoPageComponent } from './wrong-page/no-page.component';

const appRoutes: Routes =[
  { path: 'buy/:id' , component: BuyMovieComponent },
  { path: 'movie/:id' , component: MovieDetailComponent },
  { path: 'movielist', component: SelectMovieComponent },
  { path: 'firstpage', component: MovieRecommendComponent },
  { path: 'moviestore', component: AppComponent },
  { path: 'login', component: LogInComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: NoPageComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}