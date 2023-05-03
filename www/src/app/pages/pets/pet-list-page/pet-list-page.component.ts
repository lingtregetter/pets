import { Component } from '@angular/core';
import { Pet } from 'src/app/interfaces/pet.interface';

@Component({
  selector: 'app-pet-list-page',
  templateUrl: './pet-list-page.component.html',
  styleUrls: ['./pet-list-page.component.scss'],
})
export class PetListPageComponent {
  petList: Pet[] = [
    {
      id: 1,
      name: 'Mustikas',
      code: 202211151535,
      type: 'Cat',
      furColor: 'Black',
      countryOfOrigin: 'Estonia',
    },
    {
      id: 2,
      name: 'Roy',
      code: 202211151536,
      type: 'Dog',
      furColor: 'Brown',
      countryOfOrigin: 'Latvia',
    },
    {
      id: 3,
      name: 'Charles',
      code: 202211151536,
      type: 'Horse',
      furColor: 'White',
      countryOfOrigin: 'Norway',
    },
  ];
}
