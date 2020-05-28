import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pt-showcase',
  template: `
  <section class="nes-container with-title is-rounded">
    <div class="badge-pattern" *ngIf="type">
      <div class="nes-badge">
        <span class="is-dark">{{type}}</span>
      </div>
    </div>
    <h3 class="title">{{title}}</h3>
    <ng-content></ng-content>
    <button type="button" class="nes-btn is-primary" (click)="btnEvent.emit()">{{txtButton}}</button>
  </section>
  `,
  styles: [
    `.badge-pattern {
      position: absolute;
      top: -25px;
      right: 0;
    }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowcaseComponent {
  @Input() title = '';
  @Input() txtButton = '';
  @Input() type = '';
  @Output() btnEvent = new EventEmitter<void>();
}
