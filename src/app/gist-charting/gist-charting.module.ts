import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GistChartingRoutingModule} from '@app/gist-charting/gist-charting-routing.module';
import { ChartComponent } from './chart/chart.component';
import {ChartModule} from 'angular-highcharts';
import { GistChartingComponent } from './gist-charting.component';



@NgModule({
  declarations: [ChartComponent, GistChartingComponent],
  imports: [
    CommonModule,
    ChartModule,
    GistChartingRoutingModule
  ]
})
export class GistChartingModule { }
