import { Component } from '@angular/core';
import { Context } from './example/context';
import { Bus } from './example/bus';
import { Taxi } from './example/taxi';

@Component({
  templateUrl: 'strategy.component.html'
})
export class StrategyComponent {
  code1 = `export interface Strategy {
    ticket(): string;
    time(): string;
}`;

code2 = `import { Strategy } from './symbols';

export class Bus implements Strategy {
  ticket(): string {
    return 'S/1.00';
  }

  time(): string {
    return '45 min';
  }
}`;

code3 = `import { Strategy } from './symbols';

export class Taxi implements Strategy {
  ticket(): string {
    return 'S/20.00';
  }

  time(): string {
    return '10 min';
  }
}
`;

code4 = `import { Strategy } from './symbols';

export class Context implements Strategy {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  ticket(): string {
    return this.strategy.ticket();
  }

  time(): string {
    return this.strategy.time();
  }
}`;

code5 = `const context = new Context(new Bus());
console.log(context.ticket(), context.time());

setTimeout(() => {
  context.setStrategy(new Taxi());
  console.log(context.ticket(), context.time());
}, 3000);`;

  constructor() {
    const context = new Context(new Bus());
    console.log(context.ticket(), context.time());

    setTimeout(() => {
      context.setStrategy(new Taxi());
      console.log(context.ticket(), context.time());
    }, 3000);
  }
}
