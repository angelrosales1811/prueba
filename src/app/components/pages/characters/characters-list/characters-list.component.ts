import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { CharactersCardComponent } from '../characters-card/characters-card.component';
import { SearchComponent } from '../../../../shared/component/search/search.component';
import { InfiniteScrollDirective  } from "ngx-infinite-scroll";

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CharactersCardComponent, SearchComponent, JsonPipe, AsyncPipe, NgFor, NgIf,InfiniteScrollDirective ],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
})
export class CharactersListComponent {
  characters$ = this.dataSvc.characters$;
  showButton = false;

  private scrollHeight = 500;
  private pageNum = 1;

  constructor(@Inject(DOCUMENT) private document: Document,private dataSvc: DataService) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.scrollY;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop) > this.scrollHeight;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }


  onScrollDown(): void {
    this.pageNum++;
    this.dataSvc.getCharactersByPage(this.pageNum);
  }

}
