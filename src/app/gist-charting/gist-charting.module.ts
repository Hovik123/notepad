import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GistChartComponent } from './gist-chart/gist-chart.component';
import {GistChartingRoutingModule} from '@app/gist-charting/gist-charting-routing.module';



@NgModule({
  declarations: [GistChartComponent],
  imports: [
    CommonModule,
    GistChartingRoutingModule
  ]
})
export class GistChartingModule { }
