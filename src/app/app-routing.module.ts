import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from '@app/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/gist-manager/gist-manager.module').then((module) => module.GistManagerModule )
  },
  {
    path: 'stats',
    loadChildren: () => import('@app/gist-charting/gist-charting.module').then((module) => module.GistChartingModule )
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
