import { Component, OnInit, NgZone } from '@angular/core';
import { Reservaservice } from './../shared/Reserva.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-add-Reserva',
  templateUrl: './add-Reserva.page.html',
  styleUrls: ['./add-Reserva.page.scss'],
})

export class AddReservaPage implements OnInit {

  ReservaForm: FormGroup;

  constructor(
    private ReservaAPI: Reservaservice,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone
  ) {
    this.ReservaForm = this.fb.group({
      fechaInicio: [''],
      fechaFin: [''],
      email: ['']
    })
  }

  ngOnInit() { }

  onFormSubmit() {
    if (!this.ReservaForm.valid) {
      return false;
    } else {
      this.ReservaAPI.addReserva(this.ReservaForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.ReservaForm.reset();
            this.router.navigate(['/home']);
          })
        });
    }
  }

}
