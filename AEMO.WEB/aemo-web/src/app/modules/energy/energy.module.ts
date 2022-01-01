import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EnergyRoutingModule } from './energy-routing.module';
import { EnergyListComponent } from './energy-list/energy-list.component';
import { EnergyAddComponent } from './energy-add/energy-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormlyModule } from '../custom-formly';

@NgModule({
  declarations: [HomeComponent, EnergyListComponent, EnergyAddComponent],
  providers: [],
  imports: [
    CommonModule,
    EnergyRoutingModule,
    ReactiveFormsModule,
    CustomFormlyModule,
  ],
})
export class EnergyModule {}
