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
      name: 'Mustikas',
      code: 123243424234,
      type: 'Cat',
      furColor: 'Black',
      country: 'Estonia',
    },
    {
      name: 'Roy',
      code: 123243424234,
      type: 'Dog',
      furColor: 'White',
      country: 'Norway',
    },
    {
      name: 'Charles',
      code: 123243424234,
      type: 'Horse',
      furColor: 'Brown',
      country: 'Latvia',
    },
  ];
}
