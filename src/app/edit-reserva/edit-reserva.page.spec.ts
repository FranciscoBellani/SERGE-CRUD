import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditReservaPage } from './edit-Reserva.page';

describe('EditReservaPage', () => {
  let component: EditReservaPage;
  let fixture: ComponentFixture<EditReservaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReservaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
