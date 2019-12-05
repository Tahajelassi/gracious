import {Component, Input} from '@angular/core';
import {Character} from '../../shared/models/Character';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {RickMortyDetailsComponent} from '../rick-morty-details/rick-morty-details.component';


@Component({
  selector: 'app-rick-morty-character',
  templateUrl: './rick-morty-character.component.html',
})
export class RickMortyCharacterComponent {

  @Input() public character: Character;


  constructor(private modalService: NgbModal) {
  }


  public openDetails(): void {
    const options: NgbModalOptions = {
      size: 'lg'
    };
    const ngbModalRef = this.modalService.open(RickMortyDetailsComponent, options);
    ngbModalRef.componentInstance.character = this.character;
  }
}
