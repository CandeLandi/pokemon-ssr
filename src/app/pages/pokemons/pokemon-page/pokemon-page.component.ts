import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from "../components/pokemon-list/pokemon-list.component";
import { PokemonListSkeletonComponent } from "../ui/pokemon-list-skeleton/pokemon-list-skeleton.component";
import { PokemonService } from '../services/pokemon.service';
import { SimplePokemon } from '../interfaces/simple-pokemon.interface';

import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';


@Component({
  selector: 'pokemon-page',
  standalone: true,
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css'
})
export default class PokemonPageComponent implements OnInit {

  public pokemonService = inject(PokemonService)
  public pokemons = signal<SimplePokemon[]>([])

  private route = inject(ActivatedRoute);

  public currentPage = toSignal<number>(
    this.route.queryParamMap.pipe(
      map((params) => params.get('page') ?? '1'),
      map((page) => (isNaN(+page) ? 1 : +page)),
      map((page) => Math.max(1, page))
    )
  );


/*   public isLoading = signal(true)
 */
  ngOnInit(): void {
/*     setTimeout(() => {
      this.isLoading.set(false)
    }, 1500 ) */

    this.loadPokemons(0)

  }

public loadPokemons( page = 0 ) {
  this.pokemonService.loadPage(page).subscribe((pokemons) => {
    this.pokemons.set(pokemons);
  });
}

}
