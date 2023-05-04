import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Pet } from '../interfaces/pet.interface';
import { NewPet } from '../interfaces/new-pet.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private readonly httpClient: HttpClient) {}

  get<Type>(path: string): Promise<Type> {
    return firstValueFrom(
      this.httpClient.get<Type>(`http://localhost:8000${path}`)
    );
  }

  post<Type>(path: string, pet: NewPet): Promise<Type> {
    return firstValueFrom(
      this.httpClient.post<Type>(`http://localhost:8000${path}`, pet)
    );
  }
}
