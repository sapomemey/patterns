import { PlugTarget } from './plug-target';
import { PlugAdaptee } from './plug-adaptee';

export class PlugAdapter extends PlugTarget {
  private plugAdaptee: PlugAdaptee;

  constructor(plugAdaptee: PlugAdaptee) {
    super();
    this.plugAdaptee = plugAdaptee;
  }

  name() {
    return this.plugAdaptee.encryptName().split('').reverse().join('');
  }
}
