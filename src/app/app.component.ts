import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`
})
export class AppComponent {
  title: string = 'pokemon-app';
  pokemonList: Array<string> = ["salameche", 'ectoplasma', 'lipoutou'];

  ngOnInit(): void {
    console.log('test');
    console.table(this.pokemonList);

    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: string):void {
    console.log("vous avez selectionné ce pokemon " + pokemon);
  }
} 

