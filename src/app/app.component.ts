import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo';
  dialogRef: MatDialogRef<any, any> | undefined;

  constructor(private dialog: MatDialog) {}

  openModal() {
    this.dialogRef = this.dialog.open(ConfirmationModalComponent, {
      // height: '400px', width: '600px',
      data: 'Sam'
    });
    this.dialogRef.afterClosed().subscribe((response: string) => {
      console.log('closed', response);
    });
  }
}
