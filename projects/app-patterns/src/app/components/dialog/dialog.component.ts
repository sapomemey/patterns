import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pt-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  @Input() position: 'left' | 'right' = 'left';
}
