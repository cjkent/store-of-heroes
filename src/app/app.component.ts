import { Component, OnInit } from '@angular/core';
import {HeroService} from './hero.service';
import { appState, AppState } from './state';
import { Action, Store } from './store';
import { Hero } from './hero';
import { first } from 'rxjs/operators';

@Component({
  selector: 'my-root',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(private heroesService: HeroService, private store: Store<AppState>) {}

  ngOnInit(): void {
    console.info('AppComponent initialising');
    this.heroesService.loadHeroes();
  }
}
