import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  displayedColumns: string[] = ['Poster', 'Title', 'Year', 'Type'];

  get films() {
    return this._filmService.favoriteFilms;
  }

  constructor(private _filmService: FilmService,
              private _router: Router) { }

  ngOnInit() {

  }

  showFilmInfo(film: any): void {
    this._router.navigate(['/film', film.imdbID]);
  }

}
