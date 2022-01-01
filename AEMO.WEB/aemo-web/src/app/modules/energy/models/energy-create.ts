import { EnergyType } from './energy-type';

export interface EnergyCreate {
  date: Date;
  energyType: EnergyType;
  price: number;
}
