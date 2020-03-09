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

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    const { username } = this.activatedRoute.snapshot.params;

    this.photoService.getUserPhotos(username).subscribe(photos => this.photos = photos);
  }
}
