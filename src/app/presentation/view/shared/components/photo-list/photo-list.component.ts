import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPhoto } from '../photo/photo.interface';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: IPhoto[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos;
  }
}
