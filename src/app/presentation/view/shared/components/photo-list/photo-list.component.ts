import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPhoto } from '../photo/photo.interface';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: IPhoto[] = [];
  hasMore = true;
  username = '';
  currentPage = 1;

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

  public ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params.username;
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  public load() {
    this.photoService
      .getPaginatedUserPhotos(this.username, ++this.currentPage)
      .subscribe(photos => {
        if (!photos.length) {
         this.hasMore = false;
         return;
        }

        this.photos = [...this.photos, ...photos];
      });
  }
}
