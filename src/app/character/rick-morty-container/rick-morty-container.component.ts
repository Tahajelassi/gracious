import {Component, OnInit} from '@angular/core';
import {RickAndMortyService} from '../../shared/rick-and-morty.service';
import {Character} from '../../shared/models/Character';
import {tap} from 'rxjs/operators';
import {RickMortyReponse} from '../../shared/models/RickMortyReponse';

@Component({
  selector: 'app-rick-morty-container',
  templateUrl: './rick-morty-container.component.html',

})
export class RickMortyContainerComponent implements OnInit {

  public characters: Character[] = [];
  public totalNumberOfPages: number;
  public totalNumberOfCharacters: number;
  public defaultPage = 1;


  constructor(private rickMortyService: RickAndMortyService) {
  }

  public ngOnInit() {
    this.rickMortyService.getCharacters()
      .pipe(
        tap((value: RickMortyReponse) => this.setInitialValues(value)))
      .subscribe(() => {
      });
  }

  public changePage(pageNumber: number): void {
    this.rickMortyService.getCharacters(pageNumber.toString())
      .subscribe((value: any) => {
        this.characters = value.results;
      });
  }

  public setInitialValues(value: RickMortyReponse): void {
    this.characters = value.results;
    this.totalNumberOfPages = value.info.pages;
    this.totalNumberOfCharacters = value.info.count;
  }

}
