import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiUrl = 'https://pokeapi.co/api/v2';
  limit = 63;

  constructor(private httpClient: HttpClient) { }

  getPokemons() {
    return this.httpClient.get(`${this.apiUrl}/pokemon?limit=${this.limit}`);
  }

  getBerries() {
    return this.httpClient.get(`${this.apiUrl}/berry?limit=${this.limit}`);
  }
}
