import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo';
  links: Array<{ label: string, value: string }> = [
    { label: 'Modal', value: './modal' },
    { label: 'Reactive Forms', value: 'reactive-forms' },
    // { label: '', value: '' },
  ];

  
}
