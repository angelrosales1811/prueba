import { Component } from '@angular/core';
import { LocalStorageService } from '../../../shared/services/localStorage.service';
import { NgFor, AsyncPipe } from '@angular/common';
import { CharactersCardComponent } from '../characters/characters-card/characters-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CharactersCardComponent, NgFor,AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  charactersFav$ = this.localStorageSvc.charactersFav$;
  constructor(private localStorageSvc: LocalStorageService) {}
}
