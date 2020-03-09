import { Component, OnInit } from '@angular/core';
import { PhotoService } from './presentation/view/shared/components/photo/photo.service';

import { IPhoto } from './presentation/view/shared/components/photo/photo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'instapic-frontend';

  photos: IPhoto[] = [];

  constructor(private photoService: PhotoService) { }

  public ngOnInit(): void {
    this.photoService.getUserPhotos('flavio').subscribe(photos => this.photos = photos);
  }
}
