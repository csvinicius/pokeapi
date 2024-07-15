import { Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { BerriesComponent } from './components/berries/berries.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'berries', component: BerriesComponent }
];
