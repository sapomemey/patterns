import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@pt/components/components.module';
import { AdapterComponent } from './adapter.component';

@NgModule({
  declarations: [AdapterComponent],
  imports: [
    ComponentsModule,
    RouterModule.forChild([
      { path: '', component: AdapterComponent }
    ])
  ]
})
export class AdapterModule { }
