import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { MusicData } from './models/music-data.models';

@Injectable({
  providedIn: 'root',
})
export class DiscogsAPI {
  constructor(private http: HttpClient) {}
  public title = 'lastFM-API';
  public bigFour = [18845, 18839, 66025, 11770];

  getAlbumInfo(): void {
    let request: Observable<MusicData>[] = this.bigFour.map((bigFours) => {
      const urlApi = `https://api.discogs.com/artists/${bigFours}`;
      return this.http.get<MusicData>(urlApi);
    });
  }
}
