import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gist-charting',
  templateUrl: './gist-charting.component.html',
  styleUrls: ['./gist-charting.component.scss']
})
export class GistChartingComponent implements OnInit {
  gistSeries = [
    {
      name: 'Line 1',
      data: [1, 2, 3],
      type: 'line'
    }
    ];
  fileSeries = [
    {
      name: 'Files',
      data: [1, 2, 3],
      type: 'line'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  loadMoreGists() {

  }

  loadMoreFiles() {

  }

}
