import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  // FREE KEY 1000 requests per day
  private API_KEY = '44c97f57';
  private OMDB_URL = 'http://www.omdbapi.com/';

  constructor(private _httpClient: HttpClient) { }

  searchFilms(title: string): Observable<any> {
    return this._httpClient.get<any>(
      `${this.OMDB_URL}`,
      {
        params: {
          apikey: `${this.API_KEY}`,
          s: `${title}`
        }
      });
  }

  getFilmInfoById(id: string): Observable<any> {
    return this._httpClient.get<any>(
      `${this.OMDB_URL}`,
      {
        params: {
          apikey: `${this.API_KEY}`,
          i: `${id}`
        }
      });
  }
}
