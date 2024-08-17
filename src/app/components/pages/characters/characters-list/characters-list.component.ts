import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss'
})
export class CharactersListComponent implements OnInit{
  characters$ = this.dataSvc.characters$;
  constructor(private dataSvc: DataService){}
  ngOnInit(): void {
  
  }

}
