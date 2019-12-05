import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {CharacterModule} from './character/character.module';
import {RouterModule, Routes} from '@angular/router';
import {RickMortyContainerComponent} from './character/rick-morty-container/rick-morty-container.component';

const appRoutes: Routes = [
  {path: 'overview', component: RickMortyContainerComponent},
  {path: '', redirectTo: '/overview', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CharacterModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
