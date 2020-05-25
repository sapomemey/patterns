import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pt-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild('dialog', { static: false }) dialogElement: ElementRef;

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

  showModal() {
    this.dialogElement.nativeElement.showModal();
  }

  goToGitHub() {
    open('https://github.com/sapomemey/patterns', '_blank');
  }
}
