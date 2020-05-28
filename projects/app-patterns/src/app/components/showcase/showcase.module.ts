import { NgModule } from '@angular/core';
import { ShowcaseComponent } from './showcase.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ShowcaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowcaseComponent
  ]
})
export class ShowcaseModule { }
