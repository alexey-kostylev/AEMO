import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnergyDataResolver } from './energy-data.resolver';
import { EnergyAddComponent } from './energy-add/energy-add.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      items: EnergyDataResolver,
    },
  },
  {
    path: 'sell',
    component: EnergyAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnergyRoutingModule {}
