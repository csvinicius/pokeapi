import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent implements OnInit {
  pokemonsList: any[] = [];

  private readonly pokemonUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
  
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.appService.getPokemons().subscribe((response: any) => {
      this.pokemonsList = response.results;
      this.pokemonsList.forEach((pokemon: any, index) => pokemon.imgUrl = `${this.pokemonUrl}/${index+1}.png`);
    });
  }
}
