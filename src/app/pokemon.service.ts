import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  fetchAllPokemon() {
    return POKEMONS;
  }

  fetchPokemonById(id: number) {
    return POKEMONS[id];
  }

}
