import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from '../components/pokemon-list/pokemon-list.component';
import { PokemonListSkeletonComponent } from '../ui/pokemon-list-skeleton/pokemon-list-skeleton.component';
import { PokemonService } from '../services/pokemon.service';
import { SimplePokemon } from '../interfaces/simple-pokemon.interface';

import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'pokemon-page',
  standalone: true,
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
})
export default class PokemonPageComponent implements OnInit {
  public pokemonService = inject(PokemonService);
  public pokemons = signal<SimplePokemon[]>([]);

  private route = inject(ActivatedRoute);
  private router = inject(Router)
  private title = inject(Title);

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

    this.loadPokemons(0);
  }

  public loadPokemons(page = 0) {
    const pageToLoad = this.currentPage()! + page;

    this.pokemonService
    .loadPage(pageToLoad)
    .pipe(
      tap(() =>
      this.router.navigate([], { queryParams: { page: pageToLoad } })
    ),
    tap(() => this.title.setTitle(`Pokemons SSR - Page ${pageToLoad}`))
    )
    .subscribe((pokemons) => {
      this.pokemons.set(pokemons);
    })
  }
}
