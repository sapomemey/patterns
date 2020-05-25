import { Strategy } from './symbols';

export class Taxi implements Strategy {
  ticket(): string {
    return 'S/20.00';
  }

  time(): string {
    return '10 min';
  }
}
