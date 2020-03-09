import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './components/photo/photo.component';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [
    PhotoComponent,
  ],
  exports: [PhotoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppMaterialModule
  ],
})
export class SharedModule { }
