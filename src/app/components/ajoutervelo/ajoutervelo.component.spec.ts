import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterveloComponent } from './ajoutervelo.component';

describe('AjouterveloComponent', () => {
  let component: AjouterveloComponent;
  let fixture: ComponentFixture<AjouterveloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterveloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterveloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
