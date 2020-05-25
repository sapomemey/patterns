import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'pt-card',
  template: `
  <section class="nes-container with-title card-container">
  <h2 class="title">{{title}}</h2>
    <ng-content></ng-content>
  </section>
  `,
  styles: [
    '.card-container { margin: 0 30px 0 30px; }'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() title = '';
}
