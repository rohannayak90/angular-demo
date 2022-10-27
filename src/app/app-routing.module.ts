import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: 'modal', component: ModalComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
