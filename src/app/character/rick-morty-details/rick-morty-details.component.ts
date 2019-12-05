import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Character} from '../../shared/models/Character';

@Component({
  selector: 'app-rick-morty-details',
  templateUrl: './rick-morty-details.component.html',
})
export class RickMortyDetailsComponent {

  @Input() public character: Character;

  constructor(private activeModal: NgbActiveModal) {
  }

  public closeModal() {
    this.activeModal.dismiss();
  }


}
