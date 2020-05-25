import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pt-showcase',
  template: `
  <section class="nes-container with-title is-rounded">
    <h3 class="title">{{title}}</h3>
    <ng-content></ng-content>
    <button type="button" class="nes-btn is-primary" (click)="btnEvent.emit()">{{txtButton}}</button>
  </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowcaseComponent {
  @Input() title = '';
  @Input() txtButton = '';
  @Output() btnEvent = new EventEmitter<void>();
}
