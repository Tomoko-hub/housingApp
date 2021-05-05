import { Component, Input, OnInit } from '@angular/core';

import { faEdit, faAddressBook } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-property-card',
  templateUrl:'property-card.component.html',
  styleUrls:['property-card.component.css']
}

)
export class PropertyCardComponent {

@Input() property : any

  faEdit = faEdit;
  faAddressBook = faAddressBook;

}
