import { Component } from '@angular/core';

@Component({
  selector: 'app-no-auth',
  standalone: true,
  imports: [],
  template: `<section class="page__notAuth">
     <h1>Sorry!!</h1>
    <p>Restricted access.</p>
  </section>`,
  styleUrl: './no-auth.component.scss',
})
export class NoAuthComponent {}
