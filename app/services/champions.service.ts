import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ChampionInfoClass } from './../classes/champion-info.class'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChampionsService {
  private apiKey: string;
  private apiUrl: string;

  constructor(
    private http: Http) {
    this.apiKey = 'RGAPI-daac71cd-aad2-4fcb-99bb-f48860d8dc2f';
    this.apiUrl = 'https://global.api.pvp.net/api/lol/static-data/br/v1.2/champion?champData=info&api_key=RGAPI-daac71cd-aad2-4fcb-99bb-f48860d8dc2f'
  }

  getChampions() {
    return this.http.get(this.apiUrl)
      .map(response => response.json().data);
  }
}