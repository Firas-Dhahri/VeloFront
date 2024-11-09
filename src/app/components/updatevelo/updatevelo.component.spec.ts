import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateveloComponent } from './updatevelo.component';

describe('UpdateveloComponent', () => {
  let component: UpdateveloComponent;
  let fixture: ComponentFixture<UpdateveloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateveloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateveloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
