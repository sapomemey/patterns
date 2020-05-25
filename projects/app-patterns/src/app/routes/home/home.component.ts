import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) { }

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
