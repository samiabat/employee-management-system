import { NgModule } from '@angular/core';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [ConfirmDeleteDialogComponent],
  imports: [AppModule],
  exports: [ConfirmDeleteDialogComponent],
})
export class ConfirmDeleteModule {}
