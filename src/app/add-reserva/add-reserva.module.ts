import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AddReservaPageRoutingModule } from './add-Reserva-routing.module';

import { AddReservaPage } from './add-Reserva.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AddReservaPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddReservaPage]
})
export class AddReservaPageModule { }
