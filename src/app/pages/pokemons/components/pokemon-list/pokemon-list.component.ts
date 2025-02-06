import { Component, input } from '@angular/core';
import { SimplePokemon } from '../../interfaces/simple-pokemon.interface';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  public pokemons = input.required<SimplePokemon[]>()

}
