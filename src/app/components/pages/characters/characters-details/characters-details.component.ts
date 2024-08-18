import { Component } from '@angular/core';
import { CharactersCardComponent } from '../characters-card/characters-card.component';
import { DataService } from '../../../../shared/services/data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-characters-details',
  standalone: true,
  imports: [CharactersCardComponent, AsyncPipe, NgIf],
  template: ` <section class="character__details">
    <app-characters-card
      *ngIf="character$ | async as character"
      [character]="character"
    ></app-characters-card>
  </section>`,
  styleUrl: './characters-details.component.scss',
})
export class CharactersDetailsComponent {
  characterId!: string;
  character$!: Observable<any>;
  constructor(private route: ActivatedRoute, private dataSvc: DataService) {
    this.route.params
      .pipe(
        take(1),
        tap(({ id }) => (this.character$ = this.dataSvc.getDetails(id)))
      )
      .subscribe();
  }
}
