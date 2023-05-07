import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'src/app/interfaces/color.interface';
import { Country } from 'src/app/interfaces/country.interface';
import { NewPet } from 'src/app/interfaces/new-pet.interface';
import { Type } from 'src/app/interfaces/type.interface';
import { PetService } from 'src/app/services/pet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pet-edit-page',
  templateUrl: './pet-edit-page.component.html',
  styleUrls: ['./pet-edit-page.component.scss'],
})
export class PetEditPageComponent implements OnInit {
  typeList: Type[] = [];
  colorList: Color[] = [];
  countryList: Country[] = [];
  petId: number | undefined;

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
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.init();
  }

  async init(): Promise<void> {
    this.typeList = await this.petService.getTypes();
    this.colorList = await this.petService.getColors();
    this.countryList = await this.petService.getCountries();

    this.activatedRoute.params.subscribe(async (params) => {
      this.petId = +params['petId'];
      const pet = await this.petService.getPet(this.petId);
      this.name!.setValue(pet.name);
      this.code!.setValue(pet.code);
      this.type!.setValue(pet.typeId);
      this.color!.setValue(pet.furColorId);
      this.country!.setValue(pet.countryOfOriginId);
    });
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

  async submitForm() {
    this.petForm.markAllAsTouched();
    if (this.petForm.invalid) {
      return;
    }

    const userId = this.userService.authenticatedUser!.id;
    const updatedPet: NewPet = {
      userId: userId,
      name: this.name!.value!,
      code: this.code!.value!,
      typeId: this.type!.value!,
      furColorId: this.color!.value!,
      countryOfOriginId: this.country!.value!,
    };

    try {
      await this.petService.editPet(updatedPet, this.petId!);
      this.router.navigateByUrl('pets');
    } catch (error) {
      alert('Something went wrong with update');
    }
  }
}
