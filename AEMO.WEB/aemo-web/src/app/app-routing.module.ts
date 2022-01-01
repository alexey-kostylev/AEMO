import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'energy',
    pathMatch: 'full',
  },
  {
    path: 'energy',
    loadChildren: () => import('./modules/energy').then((m) => m.EnergyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
