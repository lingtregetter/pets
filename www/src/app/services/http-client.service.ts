import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Pet } from '../interfaces/pet.interface';
import { NewPet } from '../interfaces/new-pet.interface';
import { User } from '../interfaces/user.interface';

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

  post<Type>(path: string, body: any): Promise<Type> {
    return firstValueFrom(
      this.httpClient.post<Type>(`http://localhost:8000${path}`, body)
    );
  }

  put<Type>(path: string, body: any): Promise<Type> {
    return firstValueFrom(
      this.httpClient.put<Type>(`http://localhost:8000${path}`, body)
    );
  }
}
