import { Component } from '@angular/core';
import { PlugAdapter } from './example/plug-adapter';
import { PlugAdaptee } from './example/plug-adaptee';

@Component({
  templateUrl: 'adapter.component.html'
})
export class AdapterComponent {
  code1 = `export class StoneInka {
    encrypted() {
      return 'ollitsac zerimar oravla';
    }
}`;
  code2 = `export class Brain {
    text() {
      return 'alfa beta gama';
    }
}`;

code3 = `export class GlassesAdapter extends Brain {
  private stoneInKa: StoneInka;

  constructor(stoneInka: StoneInka) {
    super();
    this.stoneInKa = stoneInka;
  }

  text() {
    return this.stoneInKa.encrypted().split('').reverse().join('');
  }
}`;
code4 = `
  const adapter = new GlassesAdapter(new StoneInka());
  console.log(adapter.text());
`;

  constructor() {
    const adapter = new PlugAdapter(new PlugAdaptee());
    console.log(adapter.name());
  }
}
