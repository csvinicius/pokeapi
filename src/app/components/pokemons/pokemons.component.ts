import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent implements OnInit {
  pokemonsList: any[] = [];
  filteredPokemonsList: any[] = [];
  searchTerm: string = '';
  sort: boolean = true;
  page: number = 1;

  private readonly pokemonUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
  
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  
  getPokemons() {
    this.appService.getPokemons().subscribe((response: any) => {
      this.pokemonsList = response.results;
      this.pokemonsList.forEach((pokemon: any, index) => pokemon.imgUrl = `${this.pokemonUrl}/${index+1}.png`);
      this.filteredPokemonsList = this.pokemonsList;
    });
  }
  
  filterPokemons(): void {
    this.filteredPokemonsList = this.pokemonsList
      .filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .sort((a, b) => {
        const comparison = a.name.localeCompare(b.name);
        return this.sort ? comparison : -comparison;
      });
  }

  toggleSort(): void {
    this.sort = !this.sort;
    this.filterPokemons();
  }
}
