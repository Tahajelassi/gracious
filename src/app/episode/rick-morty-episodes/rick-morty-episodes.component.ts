import {Component, Input, OnInit} from '@angular/core';
import {RickAndMortyService} from '../../shared/rick-and-morty.service';
import {Character} from '../../shared/models/Character';
import {Observable} from 'rxjs';
import {Episode} from '../../shared/models/Episode';
import {forkJoin} from 'rxjs/internal/observable/forkJoin';

@Component({
  selector: 'app-rick-morty-episodes',
  templateUrl: './rick-morty-episodes.component.html',
})
export class RickMortyEpisodesComponent implements OnInit {

  @Input() public character: Character;
  public episodes$: Observable<Episode[]>;

  constructor(private rickMortyService: RickAndMortyService) {
  }

  public ngOnInit() {
    const calls = [];
    this.character.episode.forEach((url: string) => {
      calls.push(this.rickMortyService.getEpisode(url));
    });
    this.episodes$ = forkJoin(calls);
  }

}
