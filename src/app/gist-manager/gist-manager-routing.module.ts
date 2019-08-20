import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GistManagerComponent} from '@app/gist-manager/gist-manager.component';


const routes: Routes = [
  {
    path: '',
    component: GistManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GistManagerRoutingModule { }
