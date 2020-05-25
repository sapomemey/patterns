import { NgModule } from '@angular/core';
import { ShowcaseModule } from '@pt/components/showcase/showcase.module';
import { DialogModule } from '@pt/components/dialog/dialog.module';
import { CardModule } from '@pt/components/card/card.module';
import { CodeModule } from '@pt/components/code/code.module';

const modules = [
  ShowcaseModule,
  DialogModule,
  CardModule,
  CodeModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class ComponentsModule { }
