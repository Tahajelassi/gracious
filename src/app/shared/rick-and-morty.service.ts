import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Location} from './models/Location';
import {Episode} from './models/Episode';
import {RickMortyReponse} from './models/RickMortyReponse';


@Injectable()
export class RickAndMortyService {

  private readonly baseUrl: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {
  }

  public getCharacters(page?: string): Observable<RickMortyReponse> {
    let httpParams: HttpParams = new HttpParams();

    if (page) {
      httpParams = httpParams.set('page', page);
    }
    return this.http.get<RickMortyReponse>(this.baseUrl, {
      params: httpParams,
      responseType: 'json'
    });
  }

  public getEpisode(url: string): Observable<Episode> {
    return this.http.get<Episode>(url, {responseType: 'json'});
  }

  public getLocation(url: string): Observable<Location> {
    return this.http.get<Location>(url, {
      responseType: 'json'
    });
  }
}
