import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  template: `
    <nb-card>
      <nb-card-header>{{ title }}</nb-card-header>
      <nb-card-body>{{ message }}</nb-card-body>
      <nb-card-footer>
        <button nbButton status="primary" (click)="confirm()">Yes</button>
        <button nbButton status="basic" (click)="cancel()">No</button>
      </nb-card-footer>
    </nb-card>
  `,
})
export class AWMSYesNoDialogueComponent {
  title: string;
  message: string;

  constructor(protected dialogRef: NbDialogRef<AWMSYesNoDialogueComponent>) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
