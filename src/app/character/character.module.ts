import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RickMortyCharacterComponent} from './rick-morty-character/rick-morty-character.component';
import {RickMortyContainerComponent} from './rick-morty-container/rick-morty-container.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {RickMortyDetailsComponent} from './rick-morty-details/rick-morty-details.component';
import {LocationModule} from '../location/location.module';
import {EpisodeModule} from '../episode/episode.module';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    RickMortyCharacterComponent,
    RickMortyContainerComponent,
    RickMortyDetailsComponent,
  ],
  exports: [
    RickMortyContainerComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    LocationModule,
    EpisodeModule,
    NgxSkeletonLoaderModule,
  ],
  entryComponents: [RickMortyDetailsComponent]
})
export class CharacterModule {
}
