import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddReservaPage } from './add-Reserva.page';

const routes: Routes = [
  {
    path: '',
    component: AddReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddReservaPageRoutingModule {}
