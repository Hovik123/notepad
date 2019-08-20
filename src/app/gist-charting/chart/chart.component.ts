import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Chart} from 'angular-highcharts';
import {GistService} from '@core/services/gist.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() series: any;
  @Input() title = 'Linechart';
  @Output() loadMoreAction: EventEmitter<void> = new EventEmitter<void>();

  constructor(private gistService: GistService) {


  }

  chart: any;
  loadMore() {
      this.loadMoreAction.next();
  }

  ngOnInit(): void {
    this.gistService.updateChart.subscribe(() => {
      this.chart = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: this.title
        },
        credits: {
          enabled: false
        },
        series: this.series
      });
    });
  }
}
