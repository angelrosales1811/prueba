import { Component } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  template: `
    <div class="overlay" *ngIf="isLoading$ | async">
    <div class="lds-ripple"><div></div><div></div></div>
    </div>
  `,
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  isLoading$ = this.spinnerSvc.isLoading$;

  constructor(private spinnerSvc: SpinnerService) {
    console.log(this.isLoading$);
  }
}
