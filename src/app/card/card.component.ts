import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemons-list';
import { Pokemon } from '../pokemons';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: `card.component.html`

})
export class CardComponent implements OnInit{

  title: string = 'pokemon-app';
  pokemonList: Pokemon[] = [];
  pokemonSelected: Pokemon;

  constructor(private service:PokemonService) {

  }

  ngOnInit() {

    // console.log("Je viens de charger");
    // console.table(this.pokemonList);

    // this.selectPokemon(this.pokemonList[0]);
    this.getPokemon();

}

getPokemon() {
  this.pokemonList = this.service.fetchAllPokemon();
  return this.pokemonList;
}



  selectPokemon(pokemon: Pokemon) {

    console.log("Vous avez selectioné ce pokemon : " + pokemon.name)
    // console.log("Vous avez selectioné ce pokemon : " + pokemon.id)

  }

  afficheNumberPokemon(index: number) {

    this.pokemonSelected = this.pokemonList[index-1];
    console.log("Vous avez rechercher ce pokemon : "  + this.pokemonSelected.name);


  }


}

