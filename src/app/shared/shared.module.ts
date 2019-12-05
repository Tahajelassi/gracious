import {NgModule} from '@angular/core';
import {RickAndMortyService} from './rick-and-morty.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    NgbModule,
  ],
  providers: [RickAndMortyService]
})
export class SharedModule {
}
