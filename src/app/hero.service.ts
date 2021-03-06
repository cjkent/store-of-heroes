import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';

import { Hero } from './hero';
import { appState, AppState } from './state';
import { Action, Store } from './store';

@Injectable()
export class HeroService {

  private heroesUrl = 'app/heroes'; // URL to web api

  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  loadHeroes() {
    console.info('Loading heroes', this.http);
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError),
        first(),
      )
      .subscribe(heroes => this.store.dispatch(new HeroesLoaded(heroes)));
  }

  save(hero: Hero) {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  delete(hero: Hero) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http.delete<Hero>(url).pipe(catchError(this.handleError));
  }

  // Add new Hero
  private post(hero: Hero) {
    return this.http
      .post<Hero>(this.heroesUrl, hero)
      .pipe(catchError(this.handleError));
  }

  // Update existing Hero
  private put(hero: Hero) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http.put<Hero>(url, hero).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}

class HeroesLoaded implements Action<AppState> {

  constructor(private heroes: Hero[]) {
  }

  reduce(state: AppState): AppState {
    return appState(this.heroes);
  }
}
