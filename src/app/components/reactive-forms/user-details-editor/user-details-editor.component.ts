import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-details-editor',
  templateUrl: './user-details-editor.component.html',
  styleUrls: ['./user-details-editor.component.scss']
})
export class UserDetailsEditorComponent implements OnInit {

  userDetailsForm = new FormGroup({
    name: new FormControl('Sam'),
    age: new FormControl(10)
  });
  
  constructor() { }

  ngOnInit(): void {
    this.userDetailsForm.valueChanges.subscribe(changedValues => {
      console.log('changed values', changedValues);
    });
    // (this.userDetailsForm.get('name') as FormControl).valueChanges.subscribe(changedValues => {
    //   console.log('changing name', changedValues);
    // });
  }

  onSubmitClick() {
    console.log('name', this.userDetailsForm.value.name)
    console.log('age', this.userDetailsForm.value.age)
  }

}
