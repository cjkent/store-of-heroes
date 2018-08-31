import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from './hero';
import {Observable} from 'rxjs';
import {AppState} from './state';
import {Store} from './store';
import {map} from 'rxjs/operators';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  heroes$: Observable<Hero[]>;

  constructor(private router: Router, store: Store<AppState>) {
    this.heroes$ = store.select(state => state.dashboardState.heroes).pipe(map(heroes => heroes.slice(0, 4)));
  }

  gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
