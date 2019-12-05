import {Component, Input} from '@angular/core';
import {Episode} from '../../shared/models/Episode';

@Component({
  selector: 'app-rick-morty-episode',
  templateUrl: './rick-morty-episode.component.html',
})
export class RickMortyEpisodeComponent {

  @Input() public showDetails: boolean;
  @Input() public episode: Episode;

  constructor() {
  }


}
