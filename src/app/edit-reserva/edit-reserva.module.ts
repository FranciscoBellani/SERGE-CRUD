import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { EditReservaPageRoutingModule } from './edit-Reserva-routing.module';

import { EditReservaPage } from './edit-Reserva.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EditReservaPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EditReservaPage]
})
export class EditReservaPageModule { }
