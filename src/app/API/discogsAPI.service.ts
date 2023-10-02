import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { MusicData } from '../models/music-data.models';

@Injectable({
  providedIn: 'root',
})
export class DiscogsAPI {
  constructor(private httpClient: HttpClient) {}
  public title = 'lastFM-API';
  public bigFour = [18845, 18839, 66025, 11770];

  getAlbumInfo(): Observable<MusicData>[] {
    return this.bigFour.map((bigFours) => {
      return this.httpClient
        .get<MusicData>(`https://api.discogs.com/artists/${bigFours}`)
        .pipe(
          map((response: MusicData) => {
            console.log('response', response.name);
            return { name: response.name } as MusicData;
          })
        );
    });
  }
}
// tap((data) => console.log('data', data))
