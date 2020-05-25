import { Strategy } from './symbols';

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
}
