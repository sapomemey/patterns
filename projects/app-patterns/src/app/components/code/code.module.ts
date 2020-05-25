import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeComponent } from './code.component';

@NgModule({
  declarations: [CodeComponent],
  exports: [CodeComponent],
  imports: [HighlightModule, CommonModule]
})
export class CodeModule { }
