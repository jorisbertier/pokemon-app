import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemons-list';
import { Pokemon } from '../pokemons';


@Component({
  selector: 'app-article',
  templateUrl: `article.component.html`,

})


export class ArticleComponent {

  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: string ;

  Articles: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5"
  ]

  showArticle(articleId: number) : void {
    console.log("Vous avez selectionné " + this.pokemonList[articleId].name)
  }

  resultForm(form: string) : void {
    console.log("Vous avez selectionné écrit dans le formulaire ceci: " + form)
  }

  afficherNumberPokemon(index: number): void {
    this.pokemonSelected = this.pokemonList[index-1].name;
    console.log("Vous avez rechercher ce pokemon: " + this.pokemonSelected)
  }
}
