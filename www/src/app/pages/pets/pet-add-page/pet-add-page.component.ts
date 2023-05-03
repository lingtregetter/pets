import { Component } from '@angular/core';
import { Color } from 'src/app/interfaces/color.interface';
import { Country } from 'src/app/interfaces/country.interface';
import { Type } from 'src/app/interfaces/type.interface';

@Component({
  selector: 'app-pet-add-page',
  templateUrl: './pet-add-page.component.html',
  styleUrls: ['./pet-add-page.component.scss'],
})
export class PetAddPageComponent {
  typeList: Type[] = [
    {
      id: 1,
      type: 'Cat',
    },
    {
      id: 2,
      type: 'Dog',
    },
    {
      id: 3,
      type: 'Parrot',
    },
    {
      id: 4,
      type: 'Horse',
    },
    {
      id: 5,
      type: 'Rabbit',
    },
  ];

  colorList: Color[] = [
    {
      id: 1,
      color: 'Black',
    },
    {
      id: 2,
      color: 'White',
    },
    {
      id: 3,
      color: 'Brown',
    },
    {
      id: 4,
      color: 'Yellow',
    },
    {
      id: 5,
      color: 'Blue',
    },
  ];

  countryList: Country[] = [
    {
      id: 1,
      country: 'Estonia',
    },
    {
      id: 2,
      country: 'Latvia',
    },
    {
      id: 3,
      country: 'Lithuania',
    },
    {
      id: 4,
      country: 'Finland',
    },
    {
      id: 5,
      country: 'Sweden',
    },
    {
      id: 6,
      country: 'Norway',
    },
  ];
}
