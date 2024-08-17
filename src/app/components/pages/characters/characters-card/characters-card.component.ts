import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-characters-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './characters-card.component.html',
  styleUrl: './characters-card.component.scss'
})
export class CharactersCardComponent {
  @Input() character: any;

  constructor() { }
  getIcon(): string {
    return this.character.isFavorite ? 'heart-solid.svg' : 'heart.svg';
  }

  toggleFavorite(): void {
    const isFavorite = this.character.isFavorite;
    this.getIcon();
    this.character.isFavorite = !isFavorite;
    //this.localStorageSvc.addOrRemoveFavorite(this.character);
  }
}
