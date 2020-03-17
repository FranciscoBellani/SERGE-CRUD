import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddReservaPage } from './add-Reserva.page';

describe('AddReservaPage', () => {
  let component: AddReservaPage;
  let fixture: ComponentFixture<AddReservaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReservaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
