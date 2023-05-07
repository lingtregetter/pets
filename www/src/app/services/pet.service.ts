import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Type } from '../interfaces/type.interface';
import { Color } from '../interfaces/color.interface';
import { Country } from '../interfaces/country.interface';
import { Pet } from '../interfaces/pet.interface';
import { NewPet } from '../interfaces/new-pet.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(
    private readonly httpClientService: HttpClientService,
    private readonly userService: UserService
  ) {}

  async getTypes(): Promise<Type[]> {
    const response = await this.httpClientService.get<Type[]>(
      '/api/pets/types'
    );
    return response;
  }

  async getColors(): Promise<Color[]> {
    const response = await this.httpClientService.get<Color[]>(
      '/api/pets/colors'
    );
    return response;
  }

  async getCountries(): Promise<Country[]> {
    const response = await this.httpClientService.get<Country[]>(
      '/api/pets/countries'
    );
    return response;
  }

  async getPets(): Promise<Pet[]> {
    const userId = this.userService.authenticatedUser!.id;
    const response = await this.httpClientService.get<Pet[]>(
      `/api/pets/${userId}`
    );
    return response;
  }

  async addPet(pet: NewPet): Promise<void> {
    await this.httpClientService.post<void>('/api/pets', pet);
  }

  async editPet(pet: NewPet, petId: number): Promise<void> {
    await this.httpClientService.put<void>(`/api/pets/${petId}`, pet);
  }

  async getPet(petId: number): Promise<NewPet> {
    const response = await this.httpClientService.get<NewPet>(
      `/api/pets/pet/${petId}`
    );
    return response;
  }
}
