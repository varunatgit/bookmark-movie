import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private _favoriteFilms = [];

  get favoriteFilms() {
    return this._favoriteFilms;
  }

  constructor() {
    // Load stored films
    const storedFilmsStr = localStorage.getItem('favorite') || '';
    try {
      this._favoriteFilms = JSON.parse(storedFilmsStr);
    } catch (e) {
      // Nothing
    }
  }

  addFavoriteFilm(film: any): boolean {
    const storedFilmsStr = localStorage.getItem('favorite') || '';
    if (storedFilmsStr.includes(film.imdbID)) { return false; }

    let storedFilms = [];
    try {
      storedFilms = JSON.parse(storedFilmsStr);
    } catch (e) {
      // Nothing
    }
    storedFilms.push(film);
    localStorage.setItem('favorite', JSON.stringify(storedFilms));
    this._favoriteFilms = storedFilms;
    return true;
  }
}
