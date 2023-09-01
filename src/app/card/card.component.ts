import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemons-list';
import { Pokemon } from '../pokemons';

@Component({
  selector: 'app-card',
  templateUrl: `card.component.html`

})
export class CardComponent {
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.log('test');
    
    console.table(this.pokemonList);

    // this.selectPokemon(this.pokemonList.name);
  }

  selectPokemon(pokemon: string[]) {
    console.log("vous avez selectionné ce pokemon " + pokemon);
    // POKEMONS.forEach((element) => console.log( element));
    console.log(this.pokemonList[1].name);

    }
}
