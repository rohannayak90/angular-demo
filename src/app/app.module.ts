import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationModalComponent } from './components/modal/confirmation-modal/confirmation-modal.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ModalComponent } from './components/modal/modal.component';
import { UserDetailsEditorComponent } from './components/reactive-forms/user-details-editor/user-details-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModalComponent,
    ReactiveFormsComponent,
    ModalComponent,
    UserDetailsEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    AppRoutingModule,
  ],
  providers: [],
  entryComponents: [
    ConfirmationModalComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
