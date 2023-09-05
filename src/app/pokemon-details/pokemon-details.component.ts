import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  template: `
  <div class="row">

    <div *ngIf="pokemon" class="col-md-6 col-xs-12">
        <img src="{{pokemon.picture}}" alt="">
    </div>
    <div class="col-md-6 col-xs-12">
        <h4>{{pokemon.name}}</h4>

    </div>
</div>
  
  `,
  styles: [
  ]
})
export class PokemonDetailsComponent {

  pokemon: any;

  constructor(private PokemonService: PokemonService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const pokemonId = +params['id'];
      this.getPokemonById(pokemonId -1);
    })
  }

  getPokemonById(id:number) {
    this.pokemon = this.PokemonService.fetchPokemonById(id);
  }
}
