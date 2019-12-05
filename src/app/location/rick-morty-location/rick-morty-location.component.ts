import {Component, Input, OnInit} from '@angular/core';
import {RickAndMortyService} from '../../shared/rick-and-morty.service';
import {Character} from '../../shared/models/Character';
import {Location} from '../../shared/models/Location';


@Component({
  selector: 'app-rick-morty-location',
  templateUrl: './rick-morty-location.component.html',
})
export class RickMortyLocationComponent implements OnInit {

  @Input() public character: Character;
  @Input() public showDetails: boolean;
  public location: Location;

  constructor(private rickMortyService: RickAndMortyService) {
  }

  ngOnInit(): void {
    this.rickMortyService.getLocation(this.character.location.url)
      .subscribe((value: Location) => {
        this.location = value;
      });
  }

}
