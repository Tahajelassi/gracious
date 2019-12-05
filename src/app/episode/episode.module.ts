import {NgModule} from '@angular/core';
import {RickMortyEpisodeComponent} from './rick-morty-episode/rick-morty-episode.component';
import {RickMortyEpisodesComponent} from './rick-morty-episodes/rick-morty-episodes.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    RickMortyEpisodeComponent,
    RickMortyEpisodesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbPopoverModule,
    NgxSkeletonLoaderModule,
  ],
  exports: [RickMortyEpisodesComponent]
})
export class EpisodeModule {
}
