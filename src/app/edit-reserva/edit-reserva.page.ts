import { Component, OnInit } from '@angular/core';
import { Reservaservice } from './../shared/Reserva.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-edit-Reserva',
  templateUrl: './edit-Reserva.page.html',
  styleUrls: ['./edit-Reserva.page.scss'],
})
export class EditReservaPage implements OnInit {

  updateReservaForm: FormGroup;
  id: any;

  constructor(
    private ReservaAPI: Reservaservice,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getReservaData(this.id);
    this.updateReservaForm = this.fb.group({
      Reserva_name: [''],
      artist: ['']
    })
  }

  getReservaData(id) {
    this.ReservaAPI.getReserva(id).subscribe(res => {
      this.updateReservaForm.setValue({
        Reserva_name: res['Reserva_name'],
        artist: res['artist']
      });
    });
  }

  updateForm() {
    if (!this.updateReservaForm.valid) {
      return false;
    } else {
      this.ReservaAPI.updateReserva(this.id, this.updateReservaForm.value)
        .subscribe((res) => {
          console.log(res)
          this.updateReservaForm.reset();
          this.router.navigate(['/home']);
        })
    }
  }

}
