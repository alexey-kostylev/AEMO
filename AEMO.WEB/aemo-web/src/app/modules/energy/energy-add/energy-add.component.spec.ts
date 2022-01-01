import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyAddComponent } from './energy-add.component';

describe('EnergyAddComponent', () => {
  let component: EnergyAddComponent;
  let fixture: ComponentFixture<EnergyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
