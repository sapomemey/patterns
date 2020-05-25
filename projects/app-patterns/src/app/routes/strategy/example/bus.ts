import { Strategy } from './symbols';

export class Bus implements Strategy {
  ticket(): string {
    return 'S/1.00';
  }

  time(): string {
    return '45 min';
  }
}
