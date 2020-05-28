import { NgModule } from '@angular/core';
import { SingletonComponent } from './singleton.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@pt/components/components.module';

@NgModule({
    declarations: [ SingletonComponent ],
    imports: [
        ComponentsModule,
        RouterModule.forChild([
                { path: '', component: SingletonComponent }
        ])]
})
export class SingletonModule { }
