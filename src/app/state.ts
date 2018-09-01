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

// TODO remove DOCTOR_COLOSSUS once everything is wired up to load the initial state on startup
export const DOCTOR_COLOSSUS: Hero = {
  id: 42,
  name: 'Doctor Colossus',
};

export const INITIAL_STATE: AppState = {
  dashboardState: {
    heroes: [DOCTOR_COLOSSUS],
  },
  heroesState: {
    heroes: [DOCTOR_COLOSSUS],
    error: undefined,
  },
  detailState: {
    hero: DOCTOR_COLOSSUS,
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
