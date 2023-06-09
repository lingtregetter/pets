import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Color } from 'src/app/interfaces/color.interface';
import { Country } from 'src/app/interfaces/country.interface';
import { NewPet } from 'src/app/interfaces/new-pet.interface';
import { Type } from 'src/app/interfaces/type.interface';
import { PetService } from 'src/app/services/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pet-management-page',
  templateUrl: './pet-management-page.component.html',
  styleUrls: ['./pet-management-page.component.scss'],
})
export class PetAddPageComponent implements OnInit {
  typeList: Type[] = [];
  colorList: Color[] = [];
  countryList: Country[] = [];
  petId: number | undefined;
  pageMode: string = 'add';

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
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.init();
  }

  async init(): Promise<void> {
    this.typeList = await this.petService.getTypes();
    this.colorList = await this.petService.getColors();
    this.countryList = await this.petService.getCountries();

    this.pageMode = this.activatedRoute.snapshot.data['input'];

    if (this.pageMode === 'edit') {
      this.petId = +this.activatedRoute.snapshot.params['petId'];
      const pet = await this.petService.getPet(this.petId);
      this.name!.setValue(pet.name);
      this.code!.setValue(pet.code);
      this.type!.setValue(pet.typeId);
      this.color!.setValue(pet.furColorId);
      this.country!.setValue(pet.countryOfOriginId);
    }
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
    const pet: NewPet = {
      userId: userId,
      name: this.name!.value!,
      code: this.code!.value!,
      typeId: this.type!.value!,
      furColorId: this.color!.value!,
      countryOfOriginId: this.country!.value!,
    };

    try {
      if (this.pageMode === 'add') {
        await this.petService.addPet(pet);
      } else {
        await this.petService.editPet(pet, this.petId!);
      }

      this.router.navigateByUrl('pets');
    } catch (error) {
      alert('Something went wrong- try again!');
    }
  }
}
