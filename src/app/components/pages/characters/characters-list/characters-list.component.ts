import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { CharactersCardComponent } from '../characters-card/characters-card.component';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CharactersCardComponent,JsonPipe, AsyncPipe, NgFor,NgIf],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss'
})
export class CharactersListComponent implements OnInit{
  characters$ = this.dataSvc.characters$;
  constructor(private dataSvc: DataService){}
  ngOnInit(): void {
  
  }

}
