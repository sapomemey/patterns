import { Component } from '@angular/core';
import { AppConfig } from './example/app.config';


@Component({
  selector: 'pt-singleton',
  templateUrl: './singleton.component.html'
})
export class SingletonComponent {

  code1 = `export class Config { }`;

  code2 = `export class Config {
    private constructor() { }
  }`;

  code3 = `export class Config {

    private constructor() { }

    private static instance: Config;

    public static getInstance() {

        if (Config.instance == null) {
          Config.instance = new Config();
        }
        return AppConfig.instance;
    }

  }`;

  code4 = `
    const config = AppConfig.getIntance();
    console.log(config);
  `;

  constructor() {
    const config = AppConfig.getInstance();
    console.log(config);
  }


}


