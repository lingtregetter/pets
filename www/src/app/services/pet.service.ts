import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Type } from '../interfaces/type.interface';
import { Color } from '../interfaces/color.interface';
import { Country } from '../interfaces/country.interface';
import { Pet } from '../interfaces/pet.interface';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private readonly httpClientService: HttpClientService) {}

  async getTypes(): Promise<Type[]> {
    const response = await this.httpClientService.get<Type[]>(
      '/api/pets/types'
    );
    console.log(response);
    return response;
  }

  async getColors(): Promise<Color[]> {
    const response = await this.httpClientService.get<Color[]>(
      '/api/pets/colors'
    );
    console.log(response);
    return response;
  }

  async getCountries(): Promise<Country[]> {
    const response = await this.httpClientService.get<Country[]>(
      '/api/pets/countries'
    );
    console.log(response);
    return response;
  }

  async getPets(): Promise<Pet[]> {
    const response = await this.httpClientService.get<Pet[]>('/api/pets/1');
    console.log(response);
    return response;
  }
}
