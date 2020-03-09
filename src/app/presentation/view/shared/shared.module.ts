import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './components/photo/photo.component';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [
    PhotoComponent,
  ],
  exports: [PhotoComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
})
export class SharedModule { }
