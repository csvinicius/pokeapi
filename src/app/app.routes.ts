import { Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { BerriesComponent } from './components/berries/berries.component';
import { ItemsComponent } from './components/items/items.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'berries', component: BerriesComponent },
  { path: 'items', component: ItemsComponent },
];
