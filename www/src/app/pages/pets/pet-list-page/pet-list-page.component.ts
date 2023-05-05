import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interfaces/pet.interface';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-list-page',
  templateUrl: './pet-list-page.component.html',
  styleUrls: ['./pet-list-page.component.scss'],
})
export class PetListPageComponent implements OnInit {
  petList: Pet[] = [];
  sorted: boolean = false;

  constructor(private readonly petService: PetService) {}

  ngOnInit(): void {
    this.init();
  }

  async init(): Promise<void> {
    this.petList = await this.petService.getPets();
  }

  sortByName() {
    this.sorted
      ? this.petList.sort((a, b) => a.name.localeCompare(b.name))
      : this.petList.sort((a, b) => b.name.localeCompare(a.name));

    this.sorted = !this.sorted;
  }

  sortByCode() {
    this.sorted
      ? this.petList.sort((a, b) => a.code.localeCompare(b.code))
      : this.petList.sort((a, b) => b.code.localeCompare(a.code));

    this.sorted = !this.sorted;
  }

  sortByType() {
    this.sorted
      ? this.petList.sort((a, b) => a.type.localeCompare(b.type))
      : this.petList.sort((a, b) => b.type.localeCompare(a.type));

    this.sorted = !this.sorted;
  }

  sortByColor() {
    this.sorted
      ? this.petList.sort((a, b) => a.furColor.localeCompare(b.furColor))
      : this.petList.sort((a, b) => b.furColor.localeCompare(a.furColor));

    this.sorted = !this.sorted;
  }

  sortByCountry() {
    this.sorted
      ? this.petList.sort((a, b) =>
          a.countryOfOrigin.localeCompare(b.countryOfOrigin)
        )
      : this.petList.sort((a, b) =>
          b.countryOfOrigin.localeCompare(a.countryOfOrigin)
        );

    this.sorted = !this.sorted;
  }
}
