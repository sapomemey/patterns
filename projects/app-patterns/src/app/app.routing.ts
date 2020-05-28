import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('@pt/routes/home/home.module').then(m => m.HomeModule) },
      { path: 'strategy', loadChildren: () => import('@pt/routes/strategy/strategy.module').then(m => m.StrategyModule) },
      { path: 'adapter', loadChildren: () => import('@pt/routes/adapter/adapter.module').then(m => m.AdapterModule) },
      { path: 'singleton', loadChildren: () => import('@pt/routes/singleton/singleton.module').then(m => m.SingletonModule ) }

    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
