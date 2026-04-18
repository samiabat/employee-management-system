import { NgModule } from '@angular/core';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [ConfirmDeleteDialogComponent],
  imports: [SharedModule],
  exports: [ConfirmDeleteDialogComponent],
})
export class ConfirmDeleteModule {}
