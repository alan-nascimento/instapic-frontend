import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { IPhoto } from '../photo/photo.interface';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<IPhoto[]>> {

  constructor(private service: PhotoService) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<IPhoto[]> {
    const { username } = route.params;

    return this.service.getPaginatedUserPhotos(username, 1);
  }
}
