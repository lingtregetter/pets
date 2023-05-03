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

  constructor(private readonly petService: PetService) {}

  ngOnInit(): void {
    this.init();
  }

  async init(): Promise<void> {
    this.petList = await this.petService.getPets();
  }
}
