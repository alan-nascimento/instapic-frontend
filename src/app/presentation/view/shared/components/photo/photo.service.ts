import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IPhoto } from './photo.interface';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private http: HttpClient) { }

  public getUserPhotos(username: string): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(`http://localhost:3000/${username}/photos`);
  }
}
