import { Component, OnInit } from '@angular/core';
import { Reservaservice } from './../shared/Reserva.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  Reservas: any = [];

  constructor(
    private Reservaservice: Reservaservice
  ) {
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.Reservaservice.getReservaList().subscribe((res) => {
      console.log(res)
      this.Reservas = res;
    })
  }

  



  deleteReserva(Reserva, i) {
    if (window.confirm('Do you want to delete user?')) {
      this.Reservaservice.deleteReserva(Reserva._id)
        .subscribe(() => {
          this.Reservas.splice(i, 1);
          console.log('Reserva Borrada')
        }
        )
    }
  }
}
