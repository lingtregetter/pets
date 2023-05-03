import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/interfaces/color.interface';
import { Country } from 'src/app/interfaces/country.interface';
import { Type } from 'src/app/interfaces/type.interface';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-add-page',
  templateUrl: './pet-add-page.component.html',
  styleUrls: ['./pet-add-page.component.scss'],
})
export class PetAddPageComponent implements OnInit {
  typeList: Type[] = [];
  colorList: Color[] = [];
  countryList: Country[] = [];

  constructor(private readonly petService: PetService) {}

  ngOnInit() {
    this.init();
  }

  async init(): Promise<void> {
    this.typeList = await this.petService.getTypes();
    this.colorList = await this.petService.getColors();
    this.countryList = await this.petService.getCountries();
  }
}
