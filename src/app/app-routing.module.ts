import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './presentation/view/shared/components/photo-list/photo-list.component';
import { PhotoFormComponent } from './presentation/view/shared/components/photo-form/photo-form.component';
import { NotFoundComponent } from './presentation/view/pages/errors/components/not-found/not-found.component';
import { PhotoListResolver } from './presentation/view/shared/components/photo-list/photo-list.resolver';

const routes: Routes = [
  {
    path: 'user/:username', component: PhotoListComponent, resolve: {
      photos: PhotoListResolver
    }
  },
  {
    path: 'p/add', component: PhotoFormComponent,
  },
  {
    path: '**', component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
