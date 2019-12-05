import {NgModule} from '@angular/core';
import {RickMortyLocationComponent} from './rick-morty-location/rick-morty-location.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [RickMortyLocationComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [RickMortyLocationComponent]
})
export class LocationModule {
}
