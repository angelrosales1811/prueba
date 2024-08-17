import { Component } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [NgFor,AsyncPipe],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss'
})
export class EpisodesComponent {
  episodes$ = this.dataSvc.episodes$;
  constructor(private dataSvc: DataService) { }
}
