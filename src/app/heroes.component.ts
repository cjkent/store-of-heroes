import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';
import {AppState} from './state';
import {Store} from './store';
import {Observable} from 'rxjs';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes$: Observable<Hero[]>;
  error$: Observable<string>;
  selectedHero: Hero;
  addingHero = false;
  showNgFor = false;

  constructor(private router: Router, store: Store<AppState>) {
    this.heroes$ = store.select(state => state.heroesState.heroes);
    this.error$ = store.select(state => state.heroesState.error);
  }

  addHero(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero): void {
    this.addingHero = false;
    if (savedHero) {
      // this.getHeroes();
    }
  }

  deleteHero(hero: Hero, event: any): void {
    // event.stopPropagation();
    // this.heroService.delete(hero).subscribe(res => {
    //   this.heroes = this.heroes.filter(h => h !== hero);
    //   if (this.selectedHero === hero) {
    //     this.selectedHero = null;
    //   }
    // }, error => (this.error = error));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.addingHero = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
