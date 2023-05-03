import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

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
}
