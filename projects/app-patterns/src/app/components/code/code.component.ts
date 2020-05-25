import { Component, Input } from '@angular/core';

@Component({
  selector: 'pt-code',
  template: `
    <pre><code [highlight]="typescript" [lineNumbers]="true"></code></pre>
  `,
  styles: [
    ':host { margin: 16px; }'
  ]
})
export class CodeComponent {
  @Input() typescript = '';
}
