import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GistChartingComponent} from '@app/gist-charting/gist-charting.component';

const routes: Routes = [
  {
    path: '',
    component: GistChartingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GistChartingRoutingModule {
}
