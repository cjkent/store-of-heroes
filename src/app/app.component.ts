import { Component, OnInit } from '@angular/core';
import {HeroService} from './hero.service';

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

  constructor(private heroesService: HeroService) {}

  ngOnInit(): void {
    console.info('AppComponent initialising');
    this.heroesService.loadHeroes();
  }
}
