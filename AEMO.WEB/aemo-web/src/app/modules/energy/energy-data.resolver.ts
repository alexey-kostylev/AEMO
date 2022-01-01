import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EnergyService } from './energy.service';
import { Energy } from './models';

@Injectable({
  providedIn: 'root',
})
export class EnergyDataResolver implements Resolve<Observable<Energy[]>> {
  
  constructor(private dataService: EnergyService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Energy[]> {
    return this.dataService.getEnergies();
  }
}
