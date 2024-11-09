import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherveloComponent } from './affichervelo.component';

describe('AfficherveloComponent', () => {
  let component: AfficherveloComponent;
  let fixture: ComponentFixture<AfficherveloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherveloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherveloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
