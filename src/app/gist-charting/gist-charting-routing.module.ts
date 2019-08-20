import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GistChartComponent} from '@app/gist-charting/gist-chart/gist-chart.component';


const routes: Routes = [
  {
    path: '',
    component: GistChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GistChartingRoutingModule {
}
