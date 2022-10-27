import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface IFGType {
  name: string;
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  formGroup = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true })
  });

  constructor() { }

  ngOnInit(): void {
  }

  setForm() {
    console.log('name', this.formGroup.value.name);
    console.log('name', this.formGroup.getRawValue().name);
  }

}
