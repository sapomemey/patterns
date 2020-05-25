import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@pt/components/components.module';
import { StrategyComponent } from './strategy.component';

@NgModule({
  declarations: [StrategyComponent],
  imports: [
    ComponentsModule,
    RouterModule.forChild([
      { path: '', component: StrategyComponent }
    ])
  ]
})
export class StrategyModule { }
