import { Component, OnInit } from '@angular/core';

import { ChampionsService } from './../../../services/champions.service';
import { ChampionInfoClass } from './../../../classes/champion-info.class'

@Component({
  selector: 'champions-list',
  templateUrl: 'app/components/champions/list/champions-list.component.html',
  providers: [ChampionsService]
})

export class ChampionsListComponent implements OnInit {
  champions;

  constructor(
    private championsService: ChampionsService) {
  }

  ngOnInit(): void {
    this.getChampions();
  }

  getChampions(): void {
    this.championsService.getChampions().subscribe(champions => this.champions = champions);
  }
}
