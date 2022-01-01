import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Energy, EnergyCreate } from './models';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/tokens';

@Injectable({
  providedIn: 'root',
})
export class EnergyService {
  private energyUrl: string = this.baseUrl + '/energy';

  constructor(
    @Inject(BASE_URL) protected baseUrl: string,
    private httpClient: HttpClient
  ) {}

  getEnergies(): Observable<Energy[]> {
    return this.httpClient.get<Energy[]>(this.energyUrl);
  }

  sell(model: EnergyCreate): Observable<any> {
    return this.httpClient.post(this.energyUrl, model);
  }
}
