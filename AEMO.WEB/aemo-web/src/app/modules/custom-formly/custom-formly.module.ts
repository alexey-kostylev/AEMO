import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [DatepickerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    FormlyModule.forChild({
      types: [
        {
          name: 'datepicker',
          component: DatepickerComponent,
          defaultOptions: {
            // defaultValue: new Date(),
            templateOptions: {
              datepickerOptions: {},
            },
          },
        },
      ],
    }),
    FormlyBootstrapModule,
  ],
  exports: [FormlyModule, FormlyBootstrapModule],
})
export class CustomFormlyModule {}
