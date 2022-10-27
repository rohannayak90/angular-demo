import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

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
