import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent
  extends FieldType
  implements OnInit, OnDestroy
{
  constructor() {
    super();
  }

  ngOnDestroy(): void {}

  ngOnInit() {}  

  onChange(date: any) {
    this.formControl.setValue(date);
  }

  get control() {
    return this.formControl as FormControl;
  }

  get label() {
    try {
      const label = this.to.label;

      return label;
    } catch (error) {
      return null;
    }
  }
}
