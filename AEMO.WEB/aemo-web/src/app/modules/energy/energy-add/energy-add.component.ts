import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { EnergyService } from '../energy.service';
import { Energy, EnergyCreate, EnergyType } from '../models';

export function validatePrice(control: AbstractControl): boolean {
  if (!control) {
    return false;
  }

  const value = parseInt(control.value, 10);

  if (isNaN(value)) {
    return true;
  }
  return value > 0;
}

@Component({
  selector: 'app-energy-add',
  templateUrl: './energy-add.component.html',
  styleUrls: ['./energy-add.component.scss'],
})
export class EnergyAddComponent implements OnInit {
  form = new FormGroup({});
  model: EnergyCreate = {
    date: new Date(),
    energyType: EnergyType.Gas,
    price: 0,
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'date',
      type: 'datepicker',
      templateOptions: {
        label: 'Date',
        required: true,
      },
    },
    {
      key: 'energyType',
      type: 'select',
      templateOptions: {
        label: 'Energy Type',
        required: true,
        options: [
          { label: 'Gas', value: EnergyType.Gas },
          { label: 'Electricity', value: EnergyType.Electricity },
        ],
      },
    },
    {
      key: 'price',
      type: 'input',
      templateOptions: {
        label: 'Price',
        required: true,
      },
      validators: {
        price: {
          expression: (c: AbstractControl) => validatePrice(c),
          message: 'Price must be greater than zero',
        },
      },
    },
  ];

  constructor(
    private dataService: EnergyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.invalid) {
      alert('some fields have incorrect values');
      return;
    }

    this.dataService.sell(this.model).subscribe(
      (x) => {
        this.router.navigate(['..'], { relativeTo: this.activatedRoute });
      },
      (err) => {
        alert('error selling energy' + err.statusText);
      }
    );
  }
}
