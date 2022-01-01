import { EnergyType } from './energy-type';

export interface Energy {
  id?: number;
  date: Date;
  energyType: EnergyType;
  price: number;
  discount: number;
}
