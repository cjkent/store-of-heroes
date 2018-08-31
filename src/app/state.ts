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
  selectedHero: Hero,
  error: string,
}

export interface DetailState {
  hero: Hero;
  error: string;
}

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
    selectedHero: DOCTOR_COLOSSUS,
    error: undefined,
  },
  detailState: {
    hero: DOCTOR_COLOSSUS,
    error: undefined,
  }
};
