import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Color } from 'src/app/interfaces/color.interface';
import { Country } from 'src/app/interfaces/country.interface';
import { NewPet } from 'src/app/interfaces/new-pet.interface';
import { Type } from 'src/app/interfaces/type.interface';
import { PetService } from 'src/app/services/pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-add-page',
  templateUrl: './pet-add-page.component.html',
  styleUrls: ['./pet-add-page.component.scss'],
})
export class PetAddPageComponent implements OnInit {
  typeList: Type[] = [];
  colorList: Color[] = [];
  countryList: Country[] = [];

  petForm = new FormGroup({
    name: new FormControl('', Validators.required),
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(12),
    ]),
    type: new FormControl<number | undefined>(undefined, Validators.required),
    color: new FormControl<number | undefined>(undefined, Validators.required),
    country: new FormControl<number | undefined>(
      undefined,
      Validators.required
    ),
  });

  constructor(
    private readonly petService: PetService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.init();
  }

  async init(): Promise<void> {
    this.typeList = await this.petService.getTypes();
    this.colorList = await this.petService.getColors();
    this.countryList = await this.petService.getCountries();
  }

  get name() {
    return this.petForm.get('name');
  }

  get code() {
    return this.petForm.get('code');
  }

  get type() {
    return this.petForm.get('type');
  }

  get color() {
    return this.petForm.get('color');
  }

  get country() {
    return this.petForm.get('country');
  }

  submitForm() {
    this.petForm.markAllAsTouched();
    if (this.petForm.invalid) {
      return;
    }

    const newPet: NewPet = {
      userId: 1,
      name: this.name!.value!,
      code: this.code!.value!,
      typeId: this.type!.value!,
      furColorId: this.color!.value!,
      countryOfOriginId: this.country!.value!,
    };

    this.petService.addPet(newPet);

    this.router.navigateByUrl('pets');
  }
}
