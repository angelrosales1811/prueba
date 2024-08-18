import {ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocalStorageService } from '../../../../shared/services/localStorage.service';
import { Character } from '../../../../shared/interfaces/data.interface';

@Component({
  selector: 'app-characters-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './characters-card.component.html',
  styleUrl: './characters-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersCardComponent {
  @Input() character!: Character;

  constructor(private localStorageSvc: LocalStorageService) { }
  getIcon(): string {
    return this.character.isFavorite ? 'heart-solid.svg' : 'heart.svg';
  }

  toggleFavorite(): void {
    console.log(this.character.isFavorite);
    const isFavorite = this.character.isFavorite;
    this.getIcon();
    this.character.isFavorite = !isFavorite;
    this.localStorageSvc.addOrRemoveFavorite(this.character);
  }
}
