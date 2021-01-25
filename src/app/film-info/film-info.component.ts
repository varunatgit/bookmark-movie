import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbService } from '../services/omdb.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.scss']
})
export class FilmInfoComponent implements OnInit {

  private _filmId: string;

  omdbResponse: any;
  waitForResponse = false;

  constructor(private _route: ActivatedRoute,
              private _omdbService: OmdbService,
              public _snackBar: MatSnackBar) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._filmId = params.id;
      this.loadFilmInfo();
    });
  }

  loadFilmInfo(): void {
    this.omdbResponse = undefined;
    this.waitForResponse = true;
    this._omdbService.getFilmInfoById(this._filmId)
      .subscribe(omdbResponse => {
        this.omdbResponse = omdbResponse;
        this.waitForResponse = false;
      }, error => {
        this.waitForResponse = false;
      });
  }

  getFilmKeys(): string[] {
    const exclude = ['Poster', 'Title', 'Year', 'Ratings', 'imdbID', 'Type', 'Response'];
    return Object.keys(this.omdbResponse).filter(element => !exclude.includes(element));
  }

}
