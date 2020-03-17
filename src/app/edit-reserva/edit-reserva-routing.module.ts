import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditReservaPage } from './edit-Reserva.page';

const routes: Routes = [
  {
    path: '',
    component: EditReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditReservaPageRoutingModule {}
