import {Hero} from './hero';

export interface AppState {
  dashboardState: DashboardState;
  heroesState: HeroesState;
  detailState: DetailState;
}

export interface DashboardState {
  heroes: Hero[];
}

export interface HeroesState {
  heroes: Hero[],
  error: string,
}

export interface DetailState {
  hero: Hero;
  error: string;
}

export const INITIAL_STATE: AppState = {
  dashboardState: {
    heroes: [],
  },
  heroesState: {
    heroes: [],
    error: undefined,
  },
  detailState: {
    hero: undefined,
    error: undefined,
  }
};

export function appState(heroes: Hero[]): AppState {
  return {
    dashboardState: {
      heroes: heroes,
    },
    heroesState: {
      heroes: heroes,
      error: undefined,
    },
    detailState: {
      hero: heroes.length === 0 ? undefined : heroes[0],
      error: undefined,
    }
  };
}
