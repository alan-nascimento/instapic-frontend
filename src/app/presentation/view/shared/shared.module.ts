import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from 'src/app/app-material.module';

import { PhotoComponent } from './components/photo/photo.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { LoadButtonComponent } from './components/photo-list/load-button/load-button.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    LoadButtonComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppMaterialModule
  ],
})
export class SharedModule { }
